# GoogleApiService

`Service` is the root object of Google API service configuration (service config). It describes the basic information about a logical service, such as the service name and the user-facing title, and delegates other aspects to sub-sections. Each sub-section is either a proto message or a repeated proto message that configures a specific aspect, such as auth. For more information, see each proto message definition. Example: type: google.api.Service name: calendar.googleapis.com title: Google Calendar API apis: - name: google.calendar.v3.Calendar visibility: rules: - selector: \"google.calendar.v3.*\" restriction: PREVIEW backend: rules: - selector: \"google.calendar.v3.*\" address: calendar.example.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: \"*\" requirements: provider_id: google_calendar_auth

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apis** | [**List[Api]**](Api.md) | A list of API interfaces exported by this service. Only the &#x60;name&#x60; field of the google.protobuf.Api needs to be provided by the configuration author, as the remaining fields will be derived from the IDL during the normalization process. It is an error to specify an API interface here which cannot be resolved against the associated IDL files. | [optional] 
**authentication** | [**Authentication**](Authentication.md) |  | [optional] 
**backend** | [**Backend**](Backend.md) |  | [optional] 
**billing** | [**Billing**](Billing.md) |  | [optional] 
**config_version** | **int** | Obsolete. Do not use. This field has no semantic meaning. The service config compiler always sets this field to &#x60;3&#x60;. | [optional] 
**context** | [**Context**](Context.md) |  | [optional] 
**control** | [**Control**](Control.md) |  | [optional] 
**custom_error** | [**CustomError**](CustomError.md) |  | [optional] 
**documentation** | [**Documentation**](Documentation.md) |  | [optional] 
**endpoints** | [**List[Endpoint]**](Endpoint.md) | Configuration for network endpoints. If this is empty, then an endpoint with the same name as the service is automatically generated to service all defined APIs. | [optional] 
**enums** | [**List[Enum]**](Enum.md) | A list of all enum types included in this API service. Enums referenced directly or indirectly by the &#x60;apis&#x60; are automatically included. Enums which are not referenced but shall be included should be listed here by name by the configuration author. Example: enums: - name: google.someapi.v1.SomeEnum | [optional] 
**http** | [**Http**](Http.md) |  | [optional] 
**id** | **str** | A unique ID for a specific instance of this message, typically assigned by the client for tracking purpose. Must be no longer than 63 characters and only lower case letters, digits, &#39;.&#39;, &#39;_&#39; and &#39;-&#39; are allowed. If empty, the server may choose to generate one instead. | [optional] 
**logging** | [**Logging**](Logging.md) |  | [optional] 
**logs** | [**List[LogDescriptor]**](LogDescriptor.md) | Defines the logs used by this service. | [optional] 
**metrics** | [**List[MetricDescriptor]**](MetricDescriptor.md) | Defines the metrics used by this service. | [optional] 
**monitored_resources** | [**List[MonitoredResourceDescriptor]**](MonitoredResourceDescriptor.md) | Defines the monitored resources used by this service. This is required by the Service.monitoring and Service.logging configurations. | [optional] 
**monitoring** | [**Monitoring**](Monitoring.md) |  | [optional] 
**name** | **str** | The service name, which is a DNS-like logical identifier for the service, such as &#x60;calendar.googleapis.com&#x60;. The service name typically goes through DNS verification to make sure the owner of the service also owns the DNS name. | [optional] 
**producer_project_id** | **str** | The Google project that owns this service. | [optional] 
**publishing** | [**Publishing**](Publishing.md) |  | [optional] 
**quota** | [**Quota**](Quota.md) |  | [optional] 
**source_info** | [**SourceInfo**](SourceInfo.md) |  | [optional] 
**system_parameters** | [**SystemParameters**](SystemParameters.md) |  | [optional] 
**system_types** | [**List[Type]**](Type.md) | A list of all proto message types included in this API service. It serves similar purpose as [google.api.Service.types], except that these types are not needed by user-defined APIs. Therefore, they will not show up in the generated discovery doc. This field should only be used to define system APIs in ESF. | [optional] 
**title** | **str** | The product title for this service, it is the name displayed in Google Cloud Console. | [optional] 
**types** | [**List[Type]**](Type.md) | A list of all proto message types included in this API service. Types referenced directly or indirectly by the &#x60;apis&#x60; are automatically included. Messages which are not referenced but shall be included, such as types used by the &#x60;google.protobuf.Any&#x60; type, should be listed here by name by the configuration author. Example: types: - name: google.protobuf.Int32 | [optional] 
**usage** | [**Usage**](Usage.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_api_service import GoogleApiService

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleApiService from a JSON string
google_api_service_instance = GoogleApiService.from_json(json)
# print the JSON string representation of the object
print(GoogleApiService.to_json())

# convert the object into a dict
google_api_service_dict = google_api_service_instance.to_dict()
# create an instance of GoogleApiService from a dict
google_api_service_from_dict = GoogleApiService.from_dict(google_api_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


