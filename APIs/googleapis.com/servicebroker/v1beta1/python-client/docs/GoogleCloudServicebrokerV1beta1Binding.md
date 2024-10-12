# GoogleCloudServicebrokerV1beta1Binding

Describes the binding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bind_resource** | **Dict[str, object]** | A JSON object that contains data for platform resources associated with the binding to be created. | [optional] 
**binding_id** | **str** | The id of the binding. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required. | [optional] 
**create_time** | **str** | Output only. Timestamp for when the binding was created. | [optional] 
**deployment_name** | **str** | Output only. String containing the Deployment Manager deployment name that was created for this binding, | [optional] 
**parameters** | **Dict[str, object]** | Configuration options for the service binding. | [optional] 
**plan_id** | **str** | The ID of the plan. See &#x60;Service&#x60; and &#x60;Plan&#x60; resources for details. Maximum length is 64, GUID recommended. Required. | [optional] 
**resource_name** | **str** | Output only. The resource name of the binding, e.g. projects/project_id/brokers/broker_id/service_instances/instance_id/bindings/binding_id. | [optional] 
**service_id** | **str** | The id of the service. Must be a valid identifier of a service contained in the list from a &#x60;ListServices()&#x60; call. Maximum length is 64, GUID recommended. Required. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_servicebroker_v1beta1_binding import GoogleCloudServicebrokerV1beta1Binding

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudServicebrokerV1beta1Binding from a JSON string
google_cloud_servicebroker_v1beta1_binding_instance = GoogleCloudServicebrokerV1beta1Binding.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudServicebrokerV1beta1Binding.to_json())

# convert the object into a dict
google_cloud_servicebroker_v1beta1_binding_dict = google_cloud_servicebroker_v1beta1_binding_instance.to_dict()
# create an instance of GoogleCloudServicebrokerV1beta1Binding from a dict
google_cloud_servicebroker_v1beta1_binding_from_dict = GoogleCloudServicebrokerV1beta1Binding.from_dict(google_cloud_servicebroker_v1beta1_binding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


