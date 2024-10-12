# GoogleCloudChannelV1SkuPurchaseGroup

Represents a set of SKUs that must be purchased using the same billing account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account_purchase_infos** | [**List[GoogleCloudChannelV1BillingAccountPurchaseInfo]**](GoogleCloudChannelV1BillingAccountPurchaseInfo.md) | List of billing accounts that are eligible to purhcase these SKUs. | [optional] 
**skus** | **List[str]** | Resource names of the SKUs included in this group. Format: products/{product_id}/skus/{sku_id}. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_sku_purchase_group import GoogleCloudChannelV1SkuPurchaseGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1SkuPurchaseGroup from a JSON string
google_cloud_channel_v1_sku_purchase_group_instance = GoogleCloudChannelV1SkuPurchaseGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1SkuPurchaseGroup.to_json())

# convert the object into a dict
google_cloud_channel_v1_sku_purchase_group_dict = google_cloud_channel_v1_sku_purchase_group_instance.to_dict()
# create an instance of GoogleCloudChannelV1SkuPurchaseGroup from a dict
google_cloud_channel_v1_sku_purchase_group_from_dict = GoogleCloudChannelV1SkuPurchaseGroup.from_dict(google_cloud_channel_v1_sku_purchase_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


