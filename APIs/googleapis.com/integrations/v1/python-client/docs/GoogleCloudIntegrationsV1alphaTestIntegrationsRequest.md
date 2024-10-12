# GoogleCloudIntegrationsV1alphaTestIntegrationsRequest

The request for testing an integration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Required. This is used to identify the client on whose behalf the event will be executed. | [optional] 
**deadline_seconds_time** | **str** | Optional. custom deadline of the rpc | [optional] 
**input_parameters** | [**Dict[str, GoogleCloudIntegrationsV1alphaValueType]**](GoogleCloudIntegrationsV1alphaValueType.md) | Optional. Input parameters used during integration execution. | [optional] 
**integration_version** | [**GoogleCloudIntegrationsV1alphaIntegrationVersion**](GoogleCloudIntegrationsV1alphaIntegrationVersion.md) |  | [optional] 
**parameters** | [**EnterpriseCrmFrontendsEventbusProtoEventParameters**](EnterpriseCrmFrontendsEventbusProtoEventParameters.md) |  | [optional] 
**test_mode** | **bool** | Optional. Can be specified in the event request, otherwise false (default). If true, enables tasks with condition \&quot;test_mode &#x3D; true\&quot;. If false, disables tasks with condition \&quot;test_mode &#x3D; true\&quot; if global test mode (set by platform) is also false {@link EventBusConfig}. | [optional] 
**trigger_id** | **str** | Required. The trigger id of the integration trigger config. If both trigger_id and client_id is present, the integration is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_test_integrations_request import GoogleCloudIntegrationsV1alphaTestIntegrationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaTestIntegrationsRequest from a JSON string
google_cloud_integrations_v1alpha_test_integrations_request_instance = GoogleCloudIntegrationsV1alphaTestIntegrationsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaTestIntegrationsRequest.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_test_integrations_request_dict = google_cloud_integrations_v1alpha_test_integrations_request_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaTestIntegrationsRequest from a dict
google_cloud_integrations_v1alpha_test_integrations_request_from_dict = GoogleCloudIntegrationsV1alphaTestIntegrationsRequest.from_dict(google_cloud_integrations_v1alpha_test_integrations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


