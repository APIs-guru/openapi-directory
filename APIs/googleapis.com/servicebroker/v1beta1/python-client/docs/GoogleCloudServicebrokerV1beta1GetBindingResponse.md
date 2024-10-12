# GoogleCloudServicebrokerV1beta1GetBindingResponse

Response for the `GetBinding()` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | **Dict[str, object]** | Credentials to use the binding. | [optional] 
**deployment_name** | **str** | String containing the Deployment Manager deployment name that was created for this binding, | [optional] 
**description** | **str** | Used to communicate description of the response. Usually for non-standard error codes. https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors | [optional] 
**resource_name** | **str** | Output only. The resource name of the binding, e.g. projects/project_id/brokers/broker_id/service_instances/instance_id/bindings/binding_id. | [optional] 
**route_service_url** | **str** | A URL to which the platform may proxy requests for the address sent with bind_resource.route | [optional] 
**syslog_drain_url** | **str** | From where to read system logs. | [optional] 
**volume_mounts** | **List[Dict[str, object]]** | An array of configurations for mounting volumes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_servicebroker_v1beta1_get_binding_response import GoogleCloudServicebrokerV1beta1GetBindingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudServicebrokerV1beta1GetBindingResponse from a JSON string
google_cloud_servicebroker_v1beta1_get_binding_response_instance = GoogleCloudServicebrokerV1beta1GetBindingResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudServicebrokerV1beta1GetBindingResponse.to_json())

# convert the object into a dict
google_cloud_servicebroker_v1beta1_get_binding_response_dict = google_cloud_servicebroker_v1beta1_get_binding_response_instance.to_dict()
# create an instance of GoogleCloudServicebrokerV1beta1GetBindingResponse from a dict
google_cloud_servicebroker_v1beta1_get_binding_response_from_dict = GoogleCloudServicebrokerV1beta1GetBindingResponse.from_dict(google_cloud_servicebroker_v1beta1_get_binding_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


