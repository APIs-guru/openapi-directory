# SkuCost

Describes metadata for SKU cost info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extended_unit** | **str** | The overall duration represented by the quantity. | [optional] [readonly] 
**meter_id** | **str** | The meter used for this part of a SKU&#39;s cost. | [optional] [readonly] 
**quantity** | **int** | The multiplier for the meter ID. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sku_cost import SkuCost

# TODO update the JSON string below
json = "{}"
# create an instance of SkuCost from a JSON string
sku_cost_instance = SkuCost.from_json(json)
# print the JSON string representation of the object
print(SkuCost.to_json())

# convert the object into a dict
sku_cost_dict = sku_cost_instance.to_dict()
# create an instance of SkuCost from a dict
sku_cost_from_dict = SkuCost.from_dict(sku_cost_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


