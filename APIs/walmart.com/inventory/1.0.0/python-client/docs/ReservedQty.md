# ReservedQty

Quantity that has been ordered by the customers but not yet shipped

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Inventory Count | 
**unit** | **str** | The unit of measurement. Example: &#39;EACH&#39; | 

## Example

```python
from openapi_client.models.reserved_qty import ReservedQty

# TODO update the JSON string below
json = "{}"
# create an instance of ReservedQty from a JSON string
reserved_qty_instance = ReservedQty.from_json(json)
# print the JSON string representation of the object
print(ReservedQty.to_json())

# convert the object into a dict
reserved_qty_dict = reserved_qty_instance.to_dict()
# create an instance of ReservedQty from a dict
reserved_qty_from_dict = ReservedQty.from_dict(reserved_qty_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


