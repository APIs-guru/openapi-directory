# SymbolUploadBeginRequest

A request containing information pertaining to starting a symbol upload process

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build** | **str** | The build number. Optional for Apple. Required for Android. | [optional] 
**client_callback** | **str** | The callback URL that the client can optionally provide to get status updates for the current symbol upload | [optional] 
**file_name** | **str** | The file name for the symbol upload | [optional] 
**symbol_type** | **str** | The type of the symbol for the current symbol upload | 
**version** | **str** | The version number. Optional for Apple. Required for Android. | [optional] 

## Example

```python
from openapi_client.models.symbol_upload_begin_request import SymbolUploadBeginRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SymbolUploadBeginRequest from a JSON string
symbol_upload_begin_request_instance = SymbolUploadBeginRequest.from_json(json)
# print the JSON string representation of the object
print(SymbolUploadBeginRequest.to_json())

# convert the object into a dict
symbol_upload_begin_request_dict = symbol_upload_begin_request_instance.to_dict()
# create an instance of SymbolUploadBeginRequest from a dict
symbol_upload_begin_request_from_dict = SymbolUploadBeginRequest.from_dict(symbol_upload_begin_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


