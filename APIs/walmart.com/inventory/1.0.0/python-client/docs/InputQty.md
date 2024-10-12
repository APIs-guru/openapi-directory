# InputQty

Quantity of an item that is input by the seller

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Inventory Count | 
**unit** | **str** | The unit of measurement. Example: &#39;EACH&#39; | 

## Example

```python
from openapi_client.models.input_qty import InputQty

# TODO update the JSON string below
json = "{}"
# create an instance of InputQty from a JSON string
input_qty_instance = InputQty.from_json(json)
# print the JSON string representation of the object
print(InputQty.to_json())

# convert the object into a dict
input_qty_dict = input_qty_instance.to_dict()
# create an instance of InputQty from a dict
input_qty_from_dict = InputQty.from_dict(input_qty_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


