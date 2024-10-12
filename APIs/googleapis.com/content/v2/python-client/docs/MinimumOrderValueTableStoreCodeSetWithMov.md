# MinimumOrderValueTableStoreCodeSetWithMov

A list of store code sets sharing the same minimum order value. At least two sets are required and the last one must be empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices within a service must have the same currency.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**store_codes** | **List[str]** | A list of unique store codes or empty for the catch all. | [optional] 
**value** | [**Price**](Price.md) |  | [optional] 

## Example

```python
from openapi_client.models.minimum_order_value_table_store_code_set_with_mov import MinimumOrderValueTableStoreCodeSetWithMov

# TODO update the JSON string below
json = "{}"
# create an instance of MinimumOrderValueTableStoreCodeSetWithMov from a JSON string
minimum_order_value_table_store_code_set_with_mov_instance = MinimumOrderValueTableStoreCodeSetWithMov.from_json(json)
# print the JSON string representation of the object
print(MinimumOrderValueTableStoreCodeSetWithMov.to_json())

# convert the object into a dict
minimum_order_value_table_store_code_set_with_mov_dict = minimum_order_value_table_store_code_set_with_mov_instance.to_dict()
# create an instance of MinimumOrderValueTableStoreCodeSetWithMov from a dict
minimum_order_value_table_store_code_set_with_mov_from_dict = MinimumOrderValueTableStoreCodeSetWithMov.from_dict(minimum_order_value_table_store_code_set_with_mov_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


