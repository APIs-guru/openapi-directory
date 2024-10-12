# GoogleCloudChannelV1SkuGroupCondition

A condition that applies the override if a line item SKU is found in the SKU group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku_group** | **str** | Specifies a SKU group (https://cloud.google.com/skus/sku-groups). Resource name of SKU group. Format: accounts/{account}/skuGroups/{sku_group}. Example: \&quot;accounts/C01234/skuGroups/3d50fd57-3157-4577-a5a9-a219b8490041\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_sku_group_condition import GoogleCloudChannelV1SkuGroupCondition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1SkuGroupCondition from a JSON string
google_cloud_channel_v1_sku_group_condition_instance = GoogleCloudChannelV1SkuGroupCondition.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1SkuGroupCondition.to_json())

# convert the object into a dict
google_cloud_channel_v1_sku_group_condition_dict = google_cloud_channel_v1_sku_group_condition_instance.to_dict()
# create an instance of GoogleCloudChannelV1SkuGroupCondition from a dict
google_cloud_channel_v1_sku_group_condition_from_dict = GoogleCloudChannelV1SkuGroupCondition.from_dict(google_cloud_channel_v1_sku_group_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


