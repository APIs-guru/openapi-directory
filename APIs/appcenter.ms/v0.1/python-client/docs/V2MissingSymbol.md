# V2MissingSymbol

missing symbol

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | symbol name | 
**platform** | **str** | symbol plarform | [optional] 
**status** | **str** | symbol status | 
**symbol_id** | **str** | symbol id | 

## Example

```python
from openapi_client.models.v2_missing_symbol import V2MissingSymbol

# TODO update the JSON string below
json = "{}"
# create an instance of V2MissingSymbol from a JSON string
v2_missing_symbol_instance = V2MissingSymbol.from_json(json)
# print the JSON string representation of the object
print(V2MissingSymbol.to_json())

# convert the object into a dict
v2_missing_symbol_dict = v2_missing_symbol_instance.to_dict()
# create an instance of V2MissingSymbol from a dict
v2_missing_symbol_from_dict = V2MissingSymbol.from_dict(v2_missing_symbol_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


