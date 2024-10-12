# TopTagObjectsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_count** | **int** |  | [optional] 
**answer_score** | **int** |  | [optional] 
**question_count** | **int** |  | [optional] 
**question_score** | **int** |  | [optional] 
**tag_name** | **str** |  | [optional] 
**user_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.top_tag_objects_inner import TopTagObjectsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TopTagObjectsInner from a JSON string
top_tag_objects_inner_instance = TopTagObjectsInner.from_json(json)
# print the JSON string representation of the object
print(TopTagObjectsInner.to_json())

# convert the object into a dict
top_tag_objects_inner_dict = top_tag_objects_inner_instance.to_dict()
# create an instance of TopTagObjectsInner from a dict
top_tag_objects_inner_from_dict = TopTagObjectsInner.from_dict(top_tag_objects_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


