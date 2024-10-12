# SymbolUpload

A single symbol upload entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | The application that this symbol upload belongs to | 
**file_name** | **str** | The file name for the symbol upload | [optional] 
**file_size** | **float** | The size of the file in Mebibytes. This may be 0 until the status is indexed | [optional] 
**origin** | **str** | The origin of the symbol upload | [optional] 
**status** | **str** | The current status for the symbol upload | 
**symbol_type** | **str** | The type of the symbol for the current symbol upload | 
**symbol_upload_id** | **str** | The id for the current symbol upload | 
**symbols_uploaded** | [**List[SymbolUploadsList200ResponseInnerSymbolsUploadedInner]**](SymbolUploadsList200ResponseInnerSymbolsUploadedInner.md) | The symbols found in the upload. This may be empty until the status is indexed | [optional] 
**timestamp** | **datetime** | When the symbol upload was committed, or last transaction time if not committed | [optional] 
**user** | [**SymbolUploadsList200ResponseInnerUser**](SymbolUploadsList200ResponseInnerUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.symbol_upload import SymbolUpload

# TODO update the JSON string below
json = "{}"
# create an instance of SymbolUpload from a JSON string
symbol_upload_instance = SymbolUpload.from_json(json)
# print the JSON string representation of the object
print(SymbolUpload.to_json())

# convert the object into a dict
symbol_upload_dict = symbol_upload_instance.to_dict()
# create an instance of SymbolUpload from a dict
symbol_upload_from_dict = SymbolUpload.from_dict(symbol_upload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


