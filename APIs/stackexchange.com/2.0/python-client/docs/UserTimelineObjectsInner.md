# UserTimelineObjectsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badge_id** | **int** |  | [optional] 
**comment_id** | **int** |  | [optional] 
**creation_date** | **int** |  | [optional] 
**detail** | **str** |  | [optional] 
**link** | **str** |  | [optional] 
**post_id** | **int** |  | [optional] 
**post_type** | **str** |  | [optional] 
**suggested_edit_id** | **int** |  | [optional] 
**timeline_type** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**user_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.user_timeline_objects_inner import UserTimelineObjectsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UserTimelineObjectsInner from a JSON string
user_timeline_objects_inner_instance = UserTimelineObjectsInner.from_json(json)
# print the JSON string representation of the object
print(UserTimelineObjectsInner.to_json())

# convert the object into a dict
user_timeline_objects_inner_dict = user_timeline_objects_inner_instance.to_dict()
# create an instance of UserTimelineObjectsInner from a dict
user_timeline_objects_inner_from_dict = UserTimelineObjectsInner.from_dict(user_timeline_objects_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


