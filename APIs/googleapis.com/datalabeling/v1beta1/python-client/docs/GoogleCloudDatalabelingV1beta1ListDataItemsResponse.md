# GoogleCloudDatalabelingV1beta1ListDataItemsResponse

Results of listing data items in a dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_items** | [**List[GoogleCloudDatalabelingV1beta1DataItem]**](GoogleCloudDatalabelingV1beta1DataItem.md) | The list of data items to return. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_list_data_items_response import GoogleCloudDatalabelingV1beta1ListDataItemsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ListDataItemsResponse from a JSON string
google_cloud_datalabeling_v1beta1_list_data_items_response_instance = GoogleCloudDatalabelingV1beta1ListDataItemsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ListDataItemsResponse.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_list_data_items_response_dict = google_cloud_datalabeling_v1beta1_list_data_items_response_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ListDataItemsResponse from a dict
google_cloud_datalabeling_v1beta1_list_data_items_response_from_dict = GoogleCloudDatalabelingV1beta1ListDataItemsResponse.from_dict(google_cloud_datalabeling_v1beta1_list_data_items_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


