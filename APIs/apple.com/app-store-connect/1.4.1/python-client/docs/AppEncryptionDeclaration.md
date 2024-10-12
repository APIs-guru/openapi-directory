# AppEncryptionDeclaration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppEncryptionDeclarationAttributes**](AppEncryptionDeclarationAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppEncryptionDeclarationRelationships**](AppEncryptionDeclarationRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_encryption_declaration import AppEncryptionDeclaration

# TODO update the JSON string below
json = "{}"
# create an instance of AppEncryptionDeclaration from a JSON string
app_encryption_declaration_instance = AppEncryptionDeclaration.from_json(json)
# print the JSON string representation of the object
print(AppEncryptionDeclaration.to_json())

# convert the object into a dict
app_encryption_declaration_dict = app_encryption_declaration_instance.to_dict()
# create an instance of AppEncryptionDeclaration from a dict
app_encryption_declaration_from_dict = AppEncryptionDeclaration.from_dict(app_encryption_declaration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


