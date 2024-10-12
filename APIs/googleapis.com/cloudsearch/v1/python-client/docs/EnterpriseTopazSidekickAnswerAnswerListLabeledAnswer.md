# EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer

An answer with a corresponding label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | **str** | The free text answer. | [optional] 
**label** | **str** | A localized label for the answer (e.g. \&quot;Cell phone\&quot; vs \&quot;Desk phone\&quot;). | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_answer_answer_list_labeled_answer import EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer from a JSON string
enterprise_topaz_sidekick_answer_answer_list_labeled_answer_instance = EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_answer_answer_list_labeled_answer_dict = enterprise_topaz_sidekick_answer_answer_list_labeled_answer_instance.to_dict()
# create an instance of EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer from a dict
enterprise_topaz_sidekick_answer_answer_list_labeled_answer_from_dict = EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer.from_dict(enterprise_topaz_sidekick_answer_answer_list_labeled_answer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


