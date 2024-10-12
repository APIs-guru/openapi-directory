# EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard

An answer card for a list of people that are related to the subject of the query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disambiguation_info** | [**EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo**](EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo.md) |  | [optional] 
**header** | [**EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeader**](EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeader.md) |  | [optional] 
**related_people** | [**List[EnterpriseTopazSidekickCommonPerson]**](EnterpriseTopazSidekickCommonPerson.md) | A list of people that are related to the query subject. | [optional] 
**relation_type** | **str** | Defines the type of relation the list of people have with the subject of the card. | [optional] 
**response_status** | **str** | The response status. | [optional] 
**status_message** | **str** | Localized user friendly message to display to the user in the case of missing data or an error. | [optional] 
**subject** | [**EnterpriseTopazSidekickCommonPerson**](EnterpriseTopazSidekickCommonPerson.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_people_answer_related_people_answer_card import EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard from a JSON string
enterprise_topaz_sidekick_people_answer_related_people_answer_card_instance = EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_people_answer_related_people_answer_card_dict = enterprise_topaz_sidekick_people_answer_related_people_answer_card_instance.to_dict()
# create an instance of EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard from a dict
enterprise_topaz_sidekick_people_answer_related_people_answer_card_from_dict = EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard.from_dict(enterprise_topaz_sidekick_people_answer_related_people_answer_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


