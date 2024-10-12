# UploadedSymbolInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**platform** | **str** | The platform the symbol is associated with | 
**symbol_id** | **str** | The symbol id of the symbol binary | 

## Example

```python
from openapi_client.models.uploaded_symbol_info import UploadedSymbolInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UploadedSymbolInfo from a JSON string
uploaded_symbol_info_instance = UploadedSymbolInfo.from_json(json)
# print the JSON string representation of the object
print(UploadedSymbolInfo.to_json())

# convert the object into a dict
uploaded_symbol_info_dict = uploaded_symbol_info_instance.to_dict()
# create an instance of UploadedSymbolInfo from a dict
uploaded_symbol_info_from_dict = UploadedSymbolInfo.from_dict(uploaded_symbol_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


