# EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard

Contains a list of suggested queries. Allows the user to determine what natural language queries they can ask Cloud Search (e.g. \"what can I search for?\").

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suggested_query_category** | [**List[EnterpriseTopazSidekickAnswerSuggestedQueryCategory]**](EnterpriseTopazSidekickAnswerSuggestedQueryCategory.md) | A list of queries to suggest. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_answer_suggested_query_answer_card import EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard from a JSON string
enterprise_topaz_sidekick_answer_suggested_query_answer_card_instance = EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_answer_suggested_query_answer_card_dict = enterprise_topaz_sidekick_answer_suggested_query_answer_card_instance.to_dict()
# create an instance of EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard from a dict
enterprise_topaz_sidekick_answer_suggested_query_answer_card_from_dict = EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard.from_dict(enterprise_topaz_sidekick_answer_suggested_query_answer_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


