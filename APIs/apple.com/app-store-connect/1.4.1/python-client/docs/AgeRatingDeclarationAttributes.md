# AgeRatingDeclarationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alcohol_tobacco_or_drug_use_or_references** | **str** |  | [optional] 
**contests** | **str** |  | [optional] 
**gambling** | **bool** |  | [optional] 
**gambling_and_contests** | **bool** |  | [optional] 
**gambling_simulated** | **str** |  | [optional] 
**horror_or_fear_themes** | **str** |  | [optional] 
**kids_age_band** | [**KidsAgeBand**](KidsAgeBand.md) |  | [optional] 
**mature_or_suggestive_themes** | **str** |  | [optional] 
**medical_or_treatment_information** | **str** |  | [optional] 
**profanity_or_crude_humor** | **str** |  | [optional] 
**seventeen_plus** | **bool** |  | [optional] 
**sexual_content_graphic_and_nudity** | **str** |  | [optional] 
**sexual_content_or_nudity** | **str** |  | [optional] 
**unrestricted_web_access** | **bool** |  | [optional] 
**violence_cartoon_or_fantasy** | **str** |  | [optional] 
**violence_realistic** | **str** |  | [optional] 
**violence_realistic_prolonged_graphic_or_sadistic** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.age_rating_declaration_attributes import AgeRatingDeclarationAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AgeRatingDeclarationAttributes from a JSON string
age_rating_declaration_attributes_instance = AgeRatingDeclarationAttributes.from_json(json)
# print the JSON string representation of the object
print(AgeRatingDeclarationAttributes.to_json())

# convert the object into a dict
age_rating_declaration_attributes_dict = age_rating_declaration_attributes_instance.to_dict()
# create an instance of AgeRatingDeclarationAttributes from a dict
age_rating_declaration_attributes_from_dict = AgeRatingDeclarationAttributes.from_dict(age_rating_declaration_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


