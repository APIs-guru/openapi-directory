# SymbolUploadBeginResponse

A response containing information pertaining to starting a symbol upload process

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date** | **datetime** | Describes how long the upload_url is valid | 
**symbol_upload_id** | **str** | The id for the current upload | 
**upload_url** | **str** | The URL where the client needs to upload the symbol blob to | 

## Example

```python
from openapi_client.models.symbol_upload_begin_response import SymbolUploadBeginResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SymbolUploadBeginResponse from a JSON string
symbol_upload_begin_response_instance = SymbolUploadBeginResponse.from_json(json)
# print the JSON string representation of the object
print(SymbolUploadBeginResponse.to_json())

# convert the object into a dict
symbol_upload_begin_response_dict = symbol_upload_begin_response_instance.to_dict()
# create an instance of SymbolUploadBeginResponse from a dict
symbol_upload_begin_response_from_dict = SymbolUploadBeginResponse.from_dict(symbol_upload_begin_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


