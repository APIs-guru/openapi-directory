# SkuCapacity

Capacity of the sku.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum** | **str** | Maximum capacity in TB. | [optional] [readonly] 
**usable** | **str** | Usable capacity in TB. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sku_capacity import SkuCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of SkuCapacity from a JSON string
sku_capacity_instance = SkuCapacity.from_json(json)
# print the JSON string representation of the object
print(SkuCapacity.to_json())

# convert the object into a dict
sku_capacity_dict = sku_capacity_instance.to_dict()
# create an instance of SkuCapacity from a dict
sku_capacity_from_dict = SkuCapacity.from_dict(sku_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


