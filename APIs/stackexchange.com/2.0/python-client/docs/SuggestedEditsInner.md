# SuggestedEditsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_date** | **int** |  | [optional] 
**body** | **str** |  | [optional] 
**comment** | **str** |  | [optional] 
**creation_date** | **int** |  | [optional] 
**post_id** | **int** |  | [optional] 
**post_type** | **str** |  | [optional] 
**proposing_user** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 
**rejection_date** | **int** |  | [optional] 
**suggested_edit_id** | **int** |  | [optional] 
**tags** | **List[object]** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.suggested_edits_inner import SuggestedEditsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestedEditsInner from a JSON string
suggested_edits_inner_instance = SuggestedEditsInner.from_json(json)
# print the JSON string representation of the object
print(SuggestedEditsInner.to_json())

# convert the object into a dict
suggested_edits_inner_dict = suggested_edits_inner_instance.to_dict()
# create an instance of SuggestedEditsInner from a dict
suggested_edits_inner_from_dict = SuggestedEditsInner.from_dict(suggested_edits_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


