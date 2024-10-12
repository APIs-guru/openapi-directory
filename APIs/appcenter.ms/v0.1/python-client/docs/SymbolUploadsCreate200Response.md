# SymbolUploadsCreate200Response

A response containing information pertaining to starting a symbol upload process

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date** | **datetime** | Describes how long the upload_url is valid | 
**symbol_upload_id** | **str** | The id for the current upload | 
**upload_url** | **str** | The URL where the client needs to upload the symbol blob to | 

## Example

```python
from openapi_client.models.symbol_uploads_create200_response import SymbolUploadsCreate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SymbolUploadsCreate200Response from a JSON string
symbol_uploads_create200_response_instance = SymbolUploadsCreate200Response.from_json(json)
# print the JSON string representation of the object
print(SymbolUploadsCreate200Response.to_json())

# convert the object into a dict
symbol_uploads_create200_response_dict = symbol_uploads_create200_response_instance.to_dict()
# create an instance of SymbolUploadsCreate200Response from a dict
symbol_uploads_create200_response_from_dict = SymbolUploadsCreate200Response.from_dict(symbol_uploads_create200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


