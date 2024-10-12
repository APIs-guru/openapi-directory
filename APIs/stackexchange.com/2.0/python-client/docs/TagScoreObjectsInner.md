# TagScoreObjectsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**post_count** | **int** |  | [optional] 
**score** | **int** |  | [optional] 
**user** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 

## Example

```python
from openapi_client.models.tag_score_objects_inner import TagScoreObjectsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TagScoreObjectsInner from a JSON string
tag_score_objects_inner_instance = TagScoreObjectsInner.from_json(json)
# print the JSON string representation of the object
print(TagScoreObjectsInner.to_json())

# convert the object into a dict
tag_score_objects_inner_dict = tag_score_objects_inner_instance.to_dict()
# create an instance of TagScoreObjectsInner from a dict
tag_score_objects_inner_from_dict = TagScoreObjectsInner.from_dict(tag_score_objects_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


