# SymbolUploadsCreateRequest

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
from openapi_client.models.symbol_uploads_create_request import SymbolUploadsCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SymbolUploadsCreateRequest from a JSON string
symbol_uploads_create_request_instance = SymbolUploadsCreateRequest.from_json(json)
# print the JSON string representation of the object
print(SymbolUploadsCreateRequest.to_json())

# convert the object into a dict
symbol_uploads_create_request_dict = symbol_uploads_create_request_instance.to_dict()
# create an instance of SymbolUploadsCreateRequest from a dict
symbol_uploads_create_request_from_dict = SymbolUploadsCreateRequest.from_dict(symbol_uploads_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


