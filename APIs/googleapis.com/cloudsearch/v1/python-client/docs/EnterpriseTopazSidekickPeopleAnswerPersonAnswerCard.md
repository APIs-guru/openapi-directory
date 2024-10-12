# EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard

An answer card for a single person.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | [**List[SafeHtmlProto]**](SafeHtmlProto.md) | List of answers. | [optional] 
**answer_text** | [**EnterpriseTopazSidekickAnswerAnswerList**](EnterpriseTopazSidekickAnswerAnswerList.md) |  | [optional] 
**disambiguation_info** | [**EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo**](EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo.md) |  | [optional] 
**header** | [**EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeader**](EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeader.md) |  | [optional] 
**response_status** | **str** | The response status. | [optional] 
**status_message** | **str** | Localized user friendly message to display to the user in the case of missing data or an error. | [optional] 
**subject** | [**EnterpriseTopazSidekickCommonPerson**](EnterpriseTopazSidekickCommonPerson.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_people_answer_person_answer_card import EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard from a JSON string
enterprise_topaz_sidekick_people_answer_person_answer_card_instance = EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_people_answer_person_answer_card_dict = enterprise_topaz_sidekick_people_answer_person_answer_card_instance.to_dict()
# create an instance of EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard from a dict
enterprise_topaz_sidekick_people_answer_person_answer_card_from_dict = EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard.from_dict(enterprise_topaz_sidekick_people_answer_person_answer_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


