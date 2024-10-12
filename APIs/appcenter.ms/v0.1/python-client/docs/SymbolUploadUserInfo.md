# SymbolUploadUserInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The full name of the user. Might for example be first and last name | [optional] 
**email** | **str** | The email of the user | [optional] 

## Example

```python
from openapi_client.models.symbol_upload_user_info import SymbolUploadUserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SymbolUploadUserInfo from a JSON string
symbol_upload_user_info_instance = SymbolUploadUserInfo.from_json(json)
# print the JSON string representation of the object
print(SymbolUploadUserInfo.to_json())

# convert the object into a dict
symbol_upload_user_info_dict = symbol_upload_user_info_instance.to_dict()
# create an instance of SymbolUploadUserInfo from a dict
symbol_upload_user_info_from_dict = SymbolUploadUserInfo.from_dict(symbol_upload_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


