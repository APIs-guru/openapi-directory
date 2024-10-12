# GoogleCloudServicebrokerV1beta1DeleteBindingResponse

Response for the `DeleteBinding()` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Used to communicate description of the response. Usually for non-standard error codes. https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors | [optional] 
**operation** | **str** | If broker executes operation asynchronously, this is the operation ID that can be polled to check the completion status of said operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_servicebroker_v1beta1_delete_binding_response import GoogleCloudServicebrokerV1beta1DeleteBindingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudServicebrokerV1beta1DeleteBindingResponse from a JSON string
google_cloud_servicebroker_v1beta1_delete_binding_response_instance = GoogleCloudServicebrokerV1beta1DeleteBindingResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudServicebrokerV1beta1DeleteBindingResponse.to_json())

# convert the object into a dict
google_cloud_servicebroker_v1beta1_delete_binding_response_dict = google_cloud_servicebroker_v1beta1_delete_binding_response_instance.to_dict()
# create an instance of GoogleCloudServicebrokerV1beta1DeleteBindingResponse from a dict
google_cloud_servicebroker_v1beta1_delete_binding_response_from_dict = GoogleCloudServicebrokerV1beta1DeleteBindingResponse.from_dict(google_cloud_servicebroker_v1beta1_delete_binding_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


