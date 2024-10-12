# AppEncryptionDeclarationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_encryption_declaration_state** | [**AppEncryptionDeclarationState**](AppEncryptionDeclarationState.md) |  | [optional] 
**available_on_french_store** | **bool** |  | [optional] 
**code_value** | **str** |  | [optional] 
**contains_proprietary_cryptography** | **bool** |  | [optional] 
**contains_third_party_cryptography** | **bool** |  | [optional] 
**document_name** | **str** |  | [optional] 
**document_type** | **str** |  | [optional] 
**document_url** | **str** |  | [optional] 
**exempt** | **bool** |  | [optional] 
**platform** | [**Platform**](Platform.md) |  | [optional] 
**uploaded_date** | **datetime** |  | [optional] 
**uses_encryption** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.app_encryption_declaration_attributes import AppEncryptionDeclarationAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppEncryptionDeclarationAttributes from a JSON string
app_encryption_declaration_attributes_instance = AppEncryptionDeclarationAttributes.from_json(json)
# print the JSON string representation of the object
print(AppEncryptionDeclarationAttributes.to_json())

# convert the object into a dict
app_encryption_declaration_attributes_dict = app_encryption_declaration_attributes_instance.to_dict()
# create an instance of AppEncryptionDeclarationAttributes from a dict
app_encryption_declaration_attributes_from_dict = AppEncryptionDeclarationAttributes.from_dict(app_encryption_declaration_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


