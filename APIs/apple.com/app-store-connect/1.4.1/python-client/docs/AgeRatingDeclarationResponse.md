# AgeRatingDeclarationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AgeRatingDeclaration**](AgeRatingDeclaration.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.age_rating_declaration_response import AgeRatingDeclarationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AgeRatingDeclarationResponse from a JSON string
age_rating_declaration_response_instance = AgeRatingDeclarationResponse.from_json(json)
# print the JSON string representation of the object
print(AgeRatingDeclarationResponse.to_json())

# convert the object into a dict
age_rating_declaration_response_dict = age_rating_declaration_response_instance.to_dict()
# create an instance of AgeRatingDeclarationResponse from a dict
age_rating_declaration_response_from_dict = AgeRatingDeclarationResponse.from_dict(age_rating_declaration_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


