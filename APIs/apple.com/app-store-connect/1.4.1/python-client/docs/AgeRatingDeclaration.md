# AgeRatingDeclaration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AgeRatingDeclarationAttributes**](AgeRatingDeclarationAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.age_rating_declaration import AgeRatingDeclaration

# TODO update the JSON string below
json = "{}"
# create an instance of AgeRatingDeclaration from a JSON string
age_rating_declaration_instance = AgeRatingDeclaration.from_json(json)
# print the JSON string representation of the object
print(AgeRatingDeclaration.to_json())

# convert the object into a dict
age_rating_declaration_dict = age_rating_declaration_instance.to_dict()
# create an instance of AgeRatingDeclaration from a dict
age_rating_declaration_from_dict = AgeRatingDeclaration.from_dict(age_rating_declaration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


