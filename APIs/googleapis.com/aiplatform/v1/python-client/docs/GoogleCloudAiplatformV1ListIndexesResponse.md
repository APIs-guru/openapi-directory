# GoogleCloudAiplatformV1ListIndexesResponse

Response message for IndexService.ListIndexes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indexes** | [**List[GoogleCloudAiplatformV1Index]**](GoogleCloudAiplatformV1Index.md) | List of indexes in the requested page. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass to ListIndexesRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_indexes_response import GoogleCloudAiplatformV1ListIndexesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListIndexesResponse from a JSON string
google_cloud_aiplatform_v1_list_indexes_response_instance = GoogleCloudAiplatformV1ListIndexesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListIndexesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_indexes_response_dict = google_cloud_aiplatform_v1_list_indexes_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListIndexesResponse from a dict
google_cloud_aiplatform_v1_list_indexes_response_from_dict = GoogleCloudAiplatformV1ListIndexesResponse.from_dict(google_cloud_aiplatform_v1_list_indexes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


