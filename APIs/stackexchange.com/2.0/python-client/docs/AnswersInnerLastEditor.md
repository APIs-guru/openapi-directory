# AnswersInnerLastEditor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept_rate** | **int** |  | [optional] 
**badge_counts** | [**AnswersInnerLastEditorBadgeCounts**](AnswersInnerLastEditorBadgeCounts.md) |  | [optional] 
**display_name** | **str** |  | [optional] 
**link** | **str** |  | [optional] 
**profile_image** | **str** |  | [optional] 
**reputation** | **int** |  | [optional] 
**user_id** | **int** |  | [optional] 
**user_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.answers_inner_last_editor import AnswersInnerLastEditor

# TODO update the JSON string below
json = "{}"
# create an instance of AnswersInnerLastEditor from a JSON string
answers_inner_last_editor_instance = AnswersInnerLastEditor.from_json(json)
# print the JSON string representation of the object
print(AnswersInnerLastEditor.to_json())

# convert the object into a dict
answers_inner_last_editor_dict = answers_inner_last_editor_instance.to_dict()
# create an instance of AnswersInnerLastEditor from a dict
answers_inner_last_editor_from_dict = AnswersInnerLastEditor.from_dict(answers_inner_last_editor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


