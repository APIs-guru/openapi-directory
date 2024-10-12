# AppEncryptionDeclarationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppEncryptionDeclaration]**](AppEncryptionDeclaration.md) |  | 
**included** | [**List[App]**](App.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_encryption_declarations_response import AppEncryptionDeclarationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppEncryptionDeclarationsResponse from a JSON string
app_encryption_declarations_response_instance = AppEncryptionDeclarationsResponse.from_json(json)
# print the JSON string representation of the object
print(AppEncryptionDeclarationsResponse.to_json())

# convert the object into a dict
app_encryption_declarations_response_dict = app_encryption_declarations_response_instance.to_dict()
# create an instance of AppEncryptionDeclarationsResponse from a dict
app_encryption_declarations_response_from_dict = AppEncryptionDeclarationsResponse.from_dict(app_encryption_declarations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


