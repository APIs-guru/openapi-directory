# IdfaDeclaration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**IdfaDeclarationAttributes**](IdfaDeclarationAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppStoreVersionSubmissionRelationships**](AppStoreVersionSubmissionRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.idfa_declaration import IdfaDeclaration

# TODO update the JSON string below
json = "{}"
# create an instance of IdfaDeclaration from a JSON string
idfa_declaration_instance = IdfaDeclaration.from_json(json)
# print the JSON string representation of the object
print(IdfaDeclaration.to_json())

# convert the object into a dict
idfa_declaration_dict = idfa_declaration_instance.to_dict()
# create an instance of IdfaDeclaration from a dict
idfa_declaration_from_dict = IdfaDeclaration.from_dict(idfa_declaration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


