# SymbolUploadEndRequest

A request containing information pertaining to completing a symbol upload process

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The desired operation for the symbol upload | 

## Example

```python
from openapi_client.models.symbol_upload_end_request import SymbolUploadEndRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SymbolUploadEndRequest from a JSON string
symbol_upload_end_request_instance = SymbolUploadEndRequest.from_json(json)
# print the JSON string representation of the object
print(SymbolUploadEndRequest.to_json())

# convert the object into a dict
symbol_upload_end_request_dict = symbol_upload_end_request_instance.to_dict()
# create an instance of SymbolUploadEndRequest from a dict
symbol_upload_end_request_from_dict = SymbolUploadEndRequest.from_dict(symbol_upload_end_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


