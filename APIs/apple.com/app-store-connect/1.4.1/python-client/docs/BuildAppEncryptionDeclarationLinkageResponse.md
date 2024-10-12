# BuildAppEncryptionDeclarationLinkageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BuildRelationshipsAppEncryptionDeclarationData**](BuildRelationshipsAppEncryptionDeclarationData.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.build_app_encryption_declaration_linkage_response import BuildAppEncryptionDeclarationLinkageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BuildAppEncryptionDeclarationLinkageResponse from a JSON string
build_app_encryption_declaration_linkage_response_instance = BuildAppEncryptionDeclarationLinkageResponse.from_json(json)
# print the JSON string representation of the object
print(BuildAppEncryptionDeclarationLinkageResponse.to_json())

# convert the object into a dict
build_app_encryption_declaration_linkage_response_dict = build_app_encryption_declaration_linkage_response_instance.to_dict()
# create an instance of BuildAppEncryptionDeclarationLinkageResponse from a dict
build_app_encryption_declaration_linkage_response_from_dict = BuildAppEncryptionDeclarationLinkageResponse.from_dict(build_app_encryption_declaration_linkage_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


