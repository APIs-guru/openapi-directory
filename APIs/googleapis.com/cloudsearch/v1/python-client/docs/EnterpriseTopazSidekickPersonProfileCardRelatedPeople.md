# EnterpriseTopazSidekickPersonProfileCardRelatedPeople


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**related_person** | [**List[EnterpriseTopazSidekickCommonPerson]**](EnterpriseTopazSidekickCommonPerson.md) | Related people. | [optional] 
**relation** | **str** | Relation type. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_person_profile_card_related_people import EnterpriseTopazSidekickPersonProfileCardRelatedPeople

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickPersonProfileCardRelatedPeople from a JSON string
enterprise_topaz_sidekick_person_profile_card_related_people_instance = EnterpriseTopazSidekickPersonProfileCardRelatedPeople.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickPersonProfileCardRelatedPeople.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_person_profile_card_related_people_dict = enterprise_topaz_sidekick_person_profile_card_related_people_instance.to_dict()
# create an instance of EnterpriseTopazSidekickPersonProfileCardRelatedPeople from a dict
enterprise_topaz_sidekick_person_profile_card_related_people_from_dict = EnterpriseTopazSidekickPersonProfileCardRelatedPeople.from_dict(enterprise_topaz_sidekick_person_profile_card_related_people_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


