# GoogleCloudChannelV1PurchasableSku

SKU that you can purchase. This is used in ListPurchasableSku API response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | [**GoogleCloudChannelV1Sku**](GoogleCloudChannelV1Sku.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_purchasable_sku import GoogleCloudChannelV1PurchasableSku

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1PurchasableSku from a JSON string
google_cloud_channel_v1_purchasable_sku_instance = GoogleCloudChannelV1PurchasableSku.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1PurchasableSku.to_json())

# convert the object into a dict
google_cloud_channel_v1_purchasable_sku_dict = google_cloud_channel_v1_purchasable_sku_instance.to_dict()
# create an instance of GoogleCloudChannelV1PurchasableSku from a dict
google_cloud_channel_v1_purchasable_sku_from_dict = GoogleCloudChannelV1PurchasableSku.from_dict(google_cloud_channel_v1_purchasable_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


