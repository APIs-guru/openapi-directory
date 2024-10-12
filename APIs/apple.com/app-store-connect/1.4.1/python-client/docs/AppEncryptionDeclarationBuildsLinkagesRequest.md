# AppEncryptionDeclarationBuildsLinkagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsBuildsDataInner]**](AppRelationshipsBuildsDataInner.md) |  | 

## Example

```python
from openapi_client.models.app_encryption_declaration_builds_linkages_request import AppEncryptionDeclarationBuildsLinkagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppEncryptionDeclarationBuildsLinkagesRequest from a JSON string
app_encryption_declaration_builds_linkages_request_instance = AppEncryptionDeclarationBuildsLinkagesRequest.from_json(json)
# print the JSON string representation of the object
print(AppEncryptionDeclarationBuildsLinkagesRequest.to_json())

# convert the object into a dict
app_encryption_declaration_builds_linkages_request_dict = app_encryption_declaration_builds_linkages_request_instance.to_dict()
# create an instance of AppEncryptionDeclarationBuildsLinkagesRequest from a dict
app_encryption_declaration_builds_linkages_request_from_dict = AppEncryptionDeclarationBuildsLinkagesRequest.from_dict(app_encryption_declaration_builds_linkages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


