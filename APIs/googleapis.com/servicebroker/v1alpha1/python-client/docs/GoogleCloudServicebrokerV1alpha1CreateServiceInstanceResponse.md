# GoogleCloudServicebrokerV1alpha1CreateServiceInstanceResponse

Response for the `CreateServiceInstance()` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Used to communicate description of the response. Usually for non-standard error codes. https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors | [optional] 
**operation** | **str** | If broker executes operation asynchronously, this is the operation ID that can be polled to check the completion status of said operation. This broker always will return a non-empty operation on success. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_servicebroker_v1alpha1_create_service_instance_response import GoogleCloudServicebrokerV1alpha1CreateServiceInstanceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudServicebrokerV1alpha1CreateServiceInstanceResponse from a JSON string
google_cloud_servicebroker_v1alpha1_create_service_instance_response_instance = GoogleCloudServicebrokerV1alpha1CreateServiceInstanceResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudServicebrokerV1alpha1CreateServiceInstanceResponse.to_json())

# convert the object into a dict
google_cloud_servicebroker_v1alpha1_create_service_instance_response_dict = google_cloud_servicebroker_v1alpha1_create_service_instance_response_instance.to_dict()
# create an instance of GoogleCloudServicebrokerV1alpha1CreateServiceInstanceResponse from a dict
google_cloud_servicebroker_v1alpha1_create_service_instance_response_from_dict = GoogleCloudServicebrokerV1alpha1CreateServiceInstanceResponse.from_dict(google_cloud_servicebroker_v1alpha1_create_service_instance_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


