# GoogleCloudChannelV1SkuGroup

Represents the SKU group information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Unique human readable identifier for the SKU group. | [optional] 
**name** | **str** | Resource name of SKU group. Format: accounts/{account}/skuGroups/{sku_group}. Example: \&quot;accounts/C01234/skuGroups/3d50fd57-3157-4577-a5a9-a219b8490041\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_sku_group import GoogleCloudChannelV1SkuGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1SkuGroup from a JSON string
google_cloud_channel_v1_sku_group_instance = GoogleCloudChannelV1SkuGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1SkuGroup.to_json())

# convert the object into a dict
google_cloud_channel_v1_sku_group_dict = google_cloud_channel_v1_sku_group_instance.to_dict()
# create an instance of GoogleCloudChannelV1SkuGroup from a dict
google_cloud_channel_v1_sku_group_from_dict = GoogleCloudChannelV1SkuGroup.from_dict(google_cloud_channel_v1_sku_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


