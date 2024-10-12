# SymbolStatusResponse

A response containing information pertaining to a symbol status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | The application that this symbol belongs to | 
**status** | **str** | Whether the symbol is ignored. | 
**symbol_id** | **str** | The unique id for this symbol (uuid) | 

## Example

```python
from openapi_client.models.symbol_status_response import SymbolStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SymbolStatusResponse from a JSON string
symbol_status_response_instance = SymbolStatusResponse.from_json(json)
# print the JSON string representation of the object
print(SymbolStatusResponse.to_json())

# convert the object into a dict
symbol_status_response_dict = symbol_status_response_instance.to_dict()
# create an instance of SymbolStatusResponse from a dict
symbol_status_response_from_dict = SymbolStatusResponse.from_dict(symbol_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


