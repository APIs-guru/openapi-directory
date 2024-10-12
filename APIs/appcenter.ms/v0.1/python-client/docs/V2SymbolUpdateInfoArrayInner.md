# V2SymbolUpdateInfoArrayInner

symbol update message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | application id | 
**status** | **str** | symbol upload status | 
**symbol_id** | **str** | UUID of the symbol | 

## Example

```python
from openapi_client.models.v2_symbol_update_info_array_inner import V2SymbolUpdateInfoArrayInner

# TODO update the JSON string below
json = "{}"
# create an instance of V2SymbolUpdateInfoArrayInner from a JSON string
v2_symbol_update_info_array_inner_instance = V2SymbolUpdateInfoArrayInner.from_json(json)
# print the JSON string representation of the object
print(V2SymbolUpdateInfoArrayInner.to_json())

# convert the object into a dict
v2_symbol_update_info_array_inner_dict = v2_symbol_update_info_array_inner_instance.to_dict()
# create an instance of V2SymbolUpdateInfoArrayInner from a dict
v2_symbol_update_info_array_inner_from_dict = V2SymbolUpdateInfoArrayInner.from_dict(v2_symbol_update_info_array_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


