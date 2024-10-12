# GoogleCloudServicebrokerV1beta1Service

The resource model mostly follows the Open Service Broker API, as described here: https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md Though due to Google Specifics it has additional optional fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bindable** | **bool** | Specifies whether instances of the service can be bound to applications. Required. | [optional] 
**binding_retrievable** | **bool** | Whether the service provides an endpoint to get service bindings. | [optional] 
**bindings_retrievable** | **bool** | Whether the service provides an endpoint to get service bindings. | [optional] 
**dashboard_client** | [**GoogleCloudServicebrokerV1beta1DashboardClient**](GoogleCloudServicebrokerV1beta1DashboardClient.md) |  | [optional] 
**description** | **str** | Textual description of the service. Required. | [optional] 
**id** | **str** | ID is a globally unique identifier used to uniquely identify the service. ID is an opaque string. | [optional] 
**instances_retrievable** | **bool** | Whether the service provides an endpoint to get service instances. | [optional] 
**metadata** | **Dict[str, object]** | A list of metadata for a service offering. Metadata is an arbitrary JSON object. | [optional] 
**name** | **str** | User friendly service name. Name must match [a-z0-9]+ regexp. The name must be globally unique within GCP project. Note, which is different from (\&quot;This must be globally unique within a platform marketplace\&quot;). Required. | [optional] 
**plan_updateable** | **bool** | Whether the service supports upgrade/downgrade for some plans. | [optional] 
**plans** | [**List[GoogleCloudServicebrokerV1beta1Plan]**](GoogleCloudServicebrokerV1beta1Plan.md) | A list of plans for this service. At least one plan is required. | [optional] 
**tags** | **List[str]** | Tags provide a flexible mechanism to expose a classification, attribute, or base technology of a service. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_servicebroker_v1beta1_service import GoogleCloudServicebrokerV1beta1Service

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudServicebrokerV1beta1Service from a JSON string
google_cloud_servicebroker_v1beta1_service_instance = GoogleCloudServicebrokerV1beta1Service.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudServicebrokerV1beta1Service.to_json())

# convert the object into a dict
google_cloud_servicebroker_v1beta1_service_dict = google_cloud_servicebroker_v1beta1_service_instance.to_dict()
# create an instance of GoogleCloudServicebrokerV1beta1Service from a dict
google_cloud_servicebroker_v1beta1_service_from_dict = GoogleCloudServicebrokerV1beta1Service.from_dict(google_cloud_servicebroker_v1beta1_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


