# GoogleCloudServicebrokerV1alpha1ListBindingsResponse

The response for the `ListBindings()` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bindings** | [**List[GoogleCloudServicebrokerV1alpha1Binding]**](GoogleCloudServicebrokerV1alpha1Binding.md) | The list of the bindings in the instance. | [optional] 
**description** | **str** | Used to communicate description of the response. Usually for non-standard error codes. https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors | [optional] 
**next_page_token** | **str** | This token allows you to get the next page of results for list requests. If the number of results is larger than &#x60;pageSize&#x60;, use the &#x60;nextPageToken&#x60; as a value for the query parameter &#x60;pageToken&#x60; in the next list request. Subsequent list requests will have their own &#x60;nextPageToken&#x60; to continue paging through the results | [optional] 

## Example

```python
from openapi_client.models.google_cloud_servicebroker_v1alpha1_list_bindings_response import GoogleCloudServicebrokerV1alpha1ListBindingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudServicebrokerV1alpha1ListBindingsResponse from a JSON string
google_cloud_servicebroker_v1alpha1_list_bindings_response_instance = GoogleCloudServicebrokerV1alpha1ListBindingsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudServicebrokerV1alpha1ListBindingsResponse.to_json())

# convert the object into a dict
google_cloud_servicebroker_v1alpha1_list_bindings_response_dict = google_cloud_servicebroker_v1alpha1_list_bindings_response_instance.to_dict()
# create an instance of GoogleCloudServicebrokerV1alpha1ListBindingsResponse from a dict
google_cloud_servicebroker_v1alpha1_list_bindings_response_from_dict = GoogleCloudServicebrokerV1alpha1ListBindingsResponse.from_dict(google_cloud_servicebroker_v1alpha1_list_bindings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


