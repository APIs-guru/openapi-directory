# TagsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**has_synonyms** | **bool** |  | [optional] 
**is_moderator_only** | **bool** |  | [optional] 
**is_required** | **bool** |  | [optional] 
**last_activity_date** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**synonyms** | **List[object]** |  | [optional] 
**user_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.tags_inner import TagsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TagsInner from a JSON string
tags_inner_instance = TagsInner.from_json(json)
# print the JSON string representation of the object
print(TagsInner.to_json())

# convert the object into a dict
tags_inner_dict = tags_inner_instance.to_dict()
# create an instance of TagsInner from a dict
tags_inner_from_dict = TagsInner.from_dict(tags_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


