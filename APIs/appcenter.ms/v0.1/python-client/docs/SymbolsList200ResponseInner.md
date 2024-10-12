# SymbolsList200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_symbol_ids** | **List[str]** | The other symbols in the same file | 
**app_id** | **str** | The application that this symbol belongs to | 
**build** | **str** | The build number. Optional for Apple. Required for Android. | [optional] 
**origin** | **str** | The origin of the symbol file | 
**platform** | **str** | The platform that this symbol is associated with | 
**status** | **str** | Whether the symbol is ignored. | 
**symbol_id** | **str** | The unique id for this symbol (uuid) | 
**symbol_upload_id** | **str** | The id of the symbol upload this symbol belongs to. | 
**type** | **str** | The type of the symbol for the current symbol upload | 
**url** | **str** | The path name of the symbol file in blob storage | 
**version** | **str** | The version number. Optional for Apple. Required for Android. | [optional] 

## Example

```python
from openapi_client.models.symbols_list200_response_inner import SymbolsList200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of SymbolsList200ResponseInner from a JSON string
symbols_list200_response_inner_instance = SymbolsList200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(SymbolsList200ResponseInner.to_json())

# convert the object into a dict
symbols_list200_response_inner_dict = symbols_list200_response_inner_instance.to_dict()
# create an instance of SymbolsList200ResponseInner from a dict
symbols_list200_response_inner_from_dict = SymbolsList200ResponseInner.from_dict(symbols_list200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


