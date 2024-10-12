# SymbolUploadsList200ResponseInnerUser

User information of the one who intitiated the symbol upload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The full name of the user. Might for example be first and last name | [optional] 
**email** | **str** | The email of the user | [optional] 

## Example

```python
from openapi_client.models.symbol_uploads_list200_response_inner_user import SymbolUploadsList200ResponseInnerUser

# TODO update the JSON string below
json = "{}"
# create an instance of SymbolUploadsList200ResponseInnerUser from a JSON string
symbol_uploads_list200_response_inner_user_instance = SymbolUploadsList200ResponseInnerUser.from_json(json)
# print the JSON string representation of the object
print(SymbolUploadsList200ResponseInnerUser.to_json())

# convert the object into a dict
symbol_uploads_list200_response_inner_user_dict = symbol_uploads_list200_response_inner_user_instance.to_dict()
# create an instance of SymbolUploadsList200ResponseInnerUser from a dict
symbol_uploads_list200_response_inner_user_from_dict = SymbolUploadsList200ResponseInnerUser.from_dict(symbol_uploads_list200_response_inner_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


