# SupplyQuantity

Quantity that has been ordered by the customers but not yet shipped

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Inventory Count | 
**unit** | **str** | The unit of measurement. Example: &#39;EACH&#39; | 

## Example

```python
from openapi_client.models.supply_quantity import SupplyQuantity

# TODO update the JSON string below
json = "{}"
# create an instance of SupplyQuantity from a JSON string
supply_quantity_instance = SupplyQuantity.from_json(json)
# print the JSON string representation of the object
print(SupplyQuantity.to_json())

# convert the object into a dict
supply_quantity_dict = supply_quantity_instance.to_dict()
# create an instance of SupplyQuantity from a dict
supply_quantity_from_dict = SupplyQuantity.from_dict(supply_quantity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


