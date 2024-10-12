# SymbolsGetStatus200Response

A response containing information pertaining to a symbol status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | The application that this symbol belongs to | 
**status** | **str** | Whether the symbol is ignored. | 
**symbol_id** | **str** | The unique id for this symbol (uuid) | 

## Example

```python
from openapi_client.models.symbols_get_status200_response import SymbolsGetStatus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SymbolsGetStatus200Response from a JSON string
symbols_get_status200_response_instance = SymbolsGetStatus200Response.from_json(json)
# print the JSON string representation of the object
print(SymbolsGetStatus200Response.to_json())

# convert the object into a dict
symbols_get_status200_response_dict = symbols_get_status200_response_instance.to_dict()
# create an instance of SymbolsGetStatus200Response from a dict
symbols_get_status200_response_from_dict = SymbolsGetStatus200Response.from_dict(symbols_get_status200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


