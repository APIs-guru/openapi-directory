# GoogleCloudAiplatformV1ListContextsResponse

Response message for MetadataService.ListContexts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contexts** | [**List[GoogleCloudAiplatformV1Context]**](GoogleCloudAiplatformV1Context.md) | The Contexts retrieved from the MetadataStore. | [optional] 
**next_page_token** | **str** | A token, which can be sent as ListContextsRequest.page_token to retrieve the next page. If this field is not populated, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_contexts_response import GoogleCloudAiplatformV1ListContextsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListContextsResponse from a JSON string
google_cloud_aiplatform_v1_list_contexts_response_instance = GoogleCloudAiplatformV1ListContextsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListContextsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_contexts_response_dict = google_cloud_aiplatform_v1_list_contexts_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListContextsResponse from a dict
google_cloud_aiplatform_v1_list_contexts_response_from_dict = GoogleCloudAiplatformV1ListContextsResponse.from_dict(google_cloud_aiplatform_v1_list_contexts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


