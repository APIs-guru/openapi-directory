# GoogleCloudAiplatformV1ListDataItemsResponse

Response message for DatasetService.ListDataItems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_items** | [**List[GoogleCloudAiplatformV1DataItem]**](GoogleCloudAiplatformV1DataItem.md) | A list of DataItems that matches the specified filter in the request. | [optional] 
**next_page_token** | **str** | The standard List next-page token. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_data_items_response import GoogleCloudAiplatformV1ListDataItemsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListDataItemsResponse from a JSON string
google_cloud_aiplatform_v1_list_data_items_response_instance = GoogleCloudAiplatformV1ListDataItemsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListDataItemsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_data_items_response_dict = google_cloud_aiplatform_v1_list_data_items_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListDataItemsResponse from a dict
google_cloud_aiplatform_v1_list_data_items_response_from_dict = GoogleCloudAiplatformV1ListDataItemsResponse.from_dict(google_cloud_aiplatform_v1_list_data_items_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


