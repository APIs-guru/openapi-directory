# ControlledStock


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cross_docking_time** | **int** | Time it will take to manufacture, prepare or setup this product. Time must be provided in seconds. For example 1 day should be informed as 86400. This time will be included in the ETA informed to the customer | [optional] 
**quantity** | **int** | Quantity of product available for sale | 
**reserved** | **int** | Locked product invetory for orders that are not approved and are not ready to fullfil. | [optional] 

## Example

```python
from openapi_client.models.controlled_stock import ControlledStock

# TODO update the JSON string below
json = "{}"
# create an instance of ControlledStock from a JSON string
controlled_stock_instance = ControlledStock.from_json(json)
# print the JSON string representation of the object
print(ControlledStock.to_json())

# convert the object into a dict
controlled_stock_dict = controlled_stock_instance.to_dict()
# create an instance of ControlledStock from a dict
controlled_stock_from_dict = ControlledStock.from_dict(controlled_stock_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


