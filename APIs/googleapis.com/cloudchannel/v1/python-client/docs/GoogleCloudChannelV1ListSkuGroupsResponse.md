# GoogleCloudChannelV1ListSkuGroupsResponse

Response message for ListSkuGroups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListSkuGroups.page_token to obtain that page. | [optional] 
**sku_groups** | [**List[GoogleCloudChannelV1SkuGroup]**](GoogleCloudChannelV1SkuGroup.md) | The list of SKU groups requested. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_sku_groups_response import GoogleCloudChannelV1ListSkuGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListSkuGroupsResponse from a JSON string
google_cloud_channel_v1_list_sku_groups_response_instance = GoogleCloudChannelV1ListSkuGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListSkuGroupsResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_sku_groups_response_dict = google_cloud_channel_v1_list_sku_groups_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListSkuGroupsResponse from a dict
google_cloud_channel_v1_list_sku_groups_response_from_dict = GoogleCloudChannelV1ListSkuGroupsResponse.from_dict(google_cloud_channel_v1_list_sku_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


