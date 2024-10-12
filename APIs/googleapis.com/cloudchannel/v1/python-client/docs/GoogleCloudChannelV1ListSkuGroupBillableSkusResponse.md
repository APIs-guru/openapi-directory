# GoogleCloudChannelV1ListSkuGroupBillableSkusResponse

Response message for ListSkuGroupBillableSkus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billable_skus** | [**List[GoogleCloudChannelV1BillableSku]**](GoogleCloudChannelV1BillableSku.md) | The list of billable SKUs in the requested SKU group. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListSkuGroupBillableSkus.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_sku_group_billable_skus_response import GoogleCloudChannelV1ListSkuGroupBillableSkusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListSkuGroupBillableSkusResponse from a JSON string
google_cloud_channel_v1_list_sku_group_billable_skus_response_instance = GoogleCloudChannelV1ListSkuGroupBillableSkusResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListSkuGroupBillableSkusResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_sku_group_billable_skus_response_dict = google_cloud_channel_v1_list_sku_group_billable_skus_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListSkuGroupBillableSkusResponse from a dict
google_cloud_channel_v1_list_sku_group_billable_skus_response_from_dict = GoogleCloudChannelV1ListSkuGroupBillableSkusResponse.from_dict(google_cloud_channel_v1_list_sku_group_billable_skus_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


