# GoogleCloudChannelV1ListPurchasableSkusResponse

Response message for ListPurchasableSkus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. | [optional] 
**purchasable_skus** | [**List[GoogleCloudChannelV1PurchasableSku]**](GoogleCloudChannelV1PurchasableSku.md) | The list of SKUs requested. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_purchasable_skus_response import GoogleCloudChannelV1ListPurchasableSkusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListPurchasableSkusResponse from a JSON string
google_cloud_channel_v1_list_purchasable_skus_response_instance = GoogleCloudChannelV1ListPurchasableSkusResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListPurchasableSkusResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_purchasable_skus_response_dict = google_cloud_channel_v1_list_purchasable_skus_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListPurchasableSkusResponse from a dict
google_cloud_channel_v1_list_purchasable_skus_response_from_dict = GoogleCloudChannelV1ListPurchasableSkusResponse.from_dict(google_cloud_channel_v1_list_purchasable_skus_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


