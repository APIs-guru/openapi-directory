# GoogleCloudChannelV1Sku

Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketing_info** | [**GoogleCloudChannelV1MarketingInfo**](GoogleCloudChannelV1MarketingInfo.md) |  | [optional] 
**name** | **str** | Resource Name of the SKU. Format: products/{product_id}/skus/{sku_id} | [optional] 
**product** | [**GoogleCloudChannelV1Product**](GoogleCloudChannelV1Product.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_sku import GoogleCloudChannelV1Sku

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1Sku from a JSON string
google_cloud_channel_v1_sku_instance = GoogleCloudChannelV1Sku.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1Sku.to_json())

# convert the object into a dict
google_cloud_channel_v1_sku_dict = google_cloud_channel_v1_sku_instance.to_dict()
# create an instance of GoogleCloudChannelV1Sku from a dict
google_cloud_channel_v1_sku_from_dict = GoogleCloudChannelV1Sku.from_dict(google_cloud_channel_v1_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


