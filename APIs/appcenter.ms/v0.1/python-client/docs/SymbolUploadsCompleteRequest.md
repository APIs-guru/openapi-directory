# SymbolUploadsCompleteRequest

A request containing information pertaining to completing a symbol upload process

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The desired operation for the symbol upload | 

## Example

```python
from openapi_client.models.symbol_uploads_complete_request import SymbolUploadsCompleteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SymbolUploadsCompleteRequest from a JSON string
symbol_uploads_complete_request_instance = SymbolUploadsCompleteRequest.from_json(json)
# print the JSON string representation of the object
print(SymbolUploadsCompleteRequest.to_json())

# convert the object into a dict
symbol_uploads_complete_request_dict = symbol_uploads_complete_request_instance.to_dict()
# create an instance of SymbolUploadsCompleteRequest from a dict
symbol_uploads_complete_request_from_dict = SymbolUploadsCompleteRequest.from_dict(symbol_uploads_complete_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


