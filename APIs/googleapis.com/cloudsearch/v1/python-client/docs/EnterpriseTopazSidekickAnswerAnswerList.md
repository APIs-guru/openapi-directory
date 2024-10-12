# EnterpriseTopazSidekickAnswerAnswerList

A list of answers represented as free text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labeled_answer** | [**List[EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer]**](EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer.md) | Answers that have a corresponding label. | [optional] 
**type** | **str** | Answer type. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_answer_answer_list import EnterpriseTopazSidekickAnswerAnswerList

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickAnswerAnswerList from a JSON string
enterprise_topaz_sidekick_answer_answer_list_instance = EnterpriseTopazSidekickAnswerAnswerList.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickAnswerAnswerList.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_answer_answer_list_dict = enterprise_topaz_sidekick_answer_answer_list_instance.to_dict()
# create an instance of EnterpriseTopazSidekickAnswerAnswerList from a dict
enterprise_topaz_sidekick_answer_answer_list_from_dict = EnterpriseTopazSidekickAnswerAnswerList.from_dict(enterprise_topaz_sidekick_answer_answer_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


