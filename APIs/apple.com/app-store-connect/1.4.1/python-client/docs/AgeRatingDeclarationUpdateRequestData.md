# AgeRatingDeclarationUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AgeRatingDeclarationAttributes**](AgeRatingDeclarationAttributes.md) |  | [optional] 
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.age_rating_declaration_update_request_data import AgeRatingDeclarationUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AgeRatingDeclarationUpdateRequestData from a JSON string
age_rating_declaration_update_request_data_instance = AgeRatingDeclarationUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(AgeRatingDeclarationUpdateRequestData.to_json())

# convert the object into a dict
age_rating_declaration_update_request_data_dict = age_rating_declaration_update_request_data_instance.to_dict()
# create an instance of AgeRatingDeclarationUpdateRequestData from a dict
age_rating_declaration_update_request_data_from_dict = AgeRatingDeclarationUpdateRequestData.from_dict(age_rating_declaration_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


