# RevisionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** |  | [optional] 
**comment** | **str** |  | [optional] 
**creation_date** | **int** |  | [optional] 
**is_rollback** | **bool** |  | [optional] 
**last_body** | **str** |  | [optional] 
**last_tags** | **List[object]** |  | [optional] 
**last_title** | **str** |  | [optional] 
**post_id** | **int** |  | [optional] 
**post_type** | **str** |  | [optional] 
**revision_guid** | **str** |  | [optional] 
**revision_number** | **int** |  | [optional] 
**revision_type** | **str** |  | [optional] 
**set_community_wiki** | **bool** |  | [optional] 
**tags** | **List[object]** |  | [optional] 
**title** | **str** |  | [optional] 
**user** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 

## Example

```python
from openapi_client.models.revisions_inner import RevisionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of RevisionsInner from a JSON string
revisions_inner_instance = RevisionsInner.from_json(json)
# print the JSON string representation of the object
print(RevisionsInner.to_json())

# convert the object into a dict
revisions_inner_dict = revisions_inner_instance.to_dict()
# create an instance of RevisionsInner from a dict
revisions_inner_from_dict = RevisionsInner.from_dict(revisions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


