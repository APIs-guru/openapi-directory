# ResourceSkuCosts

Describes metadata for retrieving price info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extended_unit** | **str** | An invariant to show the extended unit. | [optional] [readonly] 
**meter_id** | **str** | Used for querying price from commerce. | [optional] [readonly] 
**quantity** | **int** | The multiplier is needed to extend the base metered cost. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_sku_costs import ResourceSkuCosts

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSkuCosts from a JSON string
resource_sku_costs_instance = ResourceSkuCosts.from_json(json)
# print the JSON string representation of the object
print(ResourceSkuCosts.to_json())

# convert the object into a dict
resource_sku_costs_dict = resource_sku_costs_instance.to_dict()
# create an instance of ResourceSkuCosts from a dict
resource_sku_costs_from_dict = ResourceSkuCosts.from_dict(resource_sku_costs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


