# AppEncryptionDeclarationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppEncryptionDeclaration**](AppEncryptionDeclaration.md) |  | 
**included** | [**List[App]**](App.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_encryption_declaration_response import AppEncryptionDeclarationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppEncryptionDeclarationResponse from a JSON string
app_encryption_declaration_response_instance = AppEncryptionDeclarationResponse.from_json(json)
# print the JSON string representation of the object
print(AppEncryptionDeclarationResponse.to_json())

# convert the object into a dict
app_encryption_declaration_response_dict = app_encryption_declaration_response_instance.to_dict()
# create an instance of AppEncryptionDeclarationResponse from a dict
app_encryption_declaration_response_from_dict = AppEncryptionDeclarationResponse.from_dict(app_encryption_declaration_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


