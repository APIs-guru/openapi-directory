# EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson

A person that also matches the query, but was not selected due to a lower affinity with the requesting user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**person** | [**EnterpriseTopazSidekickCommonPerson**](EnterpriseTopazSidekickCommonPerson.md) |  | [optional] 
**query** | **str** | The query that can be used to produce an answer card with the same attribute, but for this person. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_people_answer_disambiguation_info_disambiguation_person import EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson from a JSON string
enterprise_topaz_sidekick_people_answer_disambiguation_info_disambiguation_person_instance = EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_people_answer_disambiguation_info_disambiguation_person_dict = enterprise_topaz_sidekick_people_answer_disambiguation_info_disambiguation_person_instance.to_dict()
# create an instance of EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson from a dict
enterprise_topaz_sidekick_people_answer_disambiguation_info_disambiguation_person_from_dict = EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson.from_dict(enterprise_topaz_sidekick_people_answer_disambiguation_info_disambiguation_person_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


