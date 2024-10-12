# AgeRatingDeclarationUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AgeRatingDeclarationUpdateRequestData**](AgeRatingDeclarationUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.age_rating_declaration_update_request import AgeRatingDeclarationUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AgeRatingDeclarationUpdateRequest from a JSON string
age_rating_declaration_update_request_instance = AgeRatingDeclarationUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(AgeRatingDeclarationUpdateRequest.to_json())

# convert the object into a dict
age_rating_declaration_update_request_dict = age_rating_declaration_update_request_instance.to_dict()
# create an instance of AgeRatingDeclarationUpdateRequest from a dict
age_rating_declaration_update_request_from_dict = AgeRatingDeclarationUpdateRequest.from_dict(age_rating_declaration_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


