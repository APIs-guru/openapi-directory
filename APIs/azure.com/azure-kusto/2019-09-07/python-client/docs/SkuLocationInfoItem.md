# SkuLocationInfoItem

The locations and zones info for SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The available location of the SKU. | 
**zones** | **List[str]** | The available zone of the SKU. | [optional] 

## Example

```python
from openapi_client.models.sku_location_info_item import SkuLocationInfoItem

# TODO update the JSON string below
json = "{}"
# create an instance of SkuLocationInfoItem from a JSON string
sku_location_info_item_instance = SkuLocationInfoItem.from_json(json)
# print the JSON string representation of the object
print(SkuLocationInfoItem.to_json())

# convert the object into a dict
sku_location_info_item_dict = sku_location_info_item_instance.to_dict()
# create an instance of SkuLocationInfoItem from a dict
sku_location_info_item_from_dict = SkuLocationInfoItem.from_dict(sku_location_info_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


