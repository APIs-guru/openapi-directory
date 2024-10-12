# EnterpriseTopazSidekickPersonProfileCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**related_people** | [**List[EnterpriseTopazSidekickPersonProfileCardRelatedPeople]**](EnterpriseTopazSidekickPersonProfileCardRelatedPeople.md) |  | [optional] 
**subject** | [**EnterpriseTopazSidekickCommonPerson**](EnterpriseTopazSidekickCommonPerson.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_person_profile_card import EnterpriseTopazSidekickPersonProfileCard

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickPersonProfileCard from a JSON string
enterprise_topaz_sidekick_person_profile_card_instance = EnterpriseTopazSidekickPersonProfileCard.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickPersonProfileCard.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_person_profile_card_dict = enterprise_topaz_sidekick_person_profile_card_instance.to_dict()
# create an instance of EnterpriseTopazSidekickPersonProfileCard from a dict
enterprise_topaz_sidekick_person_profile_card_from_dict = EnterpriseTopazSidekickPersonProfileCard.from_dict(enterprise_topaz_sidekick_person_profile_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


