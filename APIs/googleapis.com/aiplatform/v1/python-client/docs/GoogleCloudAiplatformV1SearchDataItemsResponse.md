# GoogleCloudAiplatformV1SearchDataItemsResponse

Response message for DatasetService.SearchDataItems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_item_views** | [**List[GoogleCloudAiplatformV1DataItemView]**](GoogleCloudAiplatformV1DataItemView.md) | The DataItemViews read. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass to SearchDataItemsRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_search_data_items_response import GoogleCloudAiplatformV1SearchDataItemsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SearchDataItemsResponse from a JSON string
google_cloud_aiplatform_v1_search_data_items_response_instance = GoogleCloudAiplatformV1SearchDataItemsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SearchDataItemsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_search_data_items_response_dict = google_cloud_aiplatform_v1_search_data_items_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SearchDataItemsResponse from a dict
google_cloud_aiplatform_v1_search_data_items_response_from_dict = GoogleCloudAiplatformV1SearchDataItemsResponse.from_dict(google_cloud_aiplatform_v1_search_data_items_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


