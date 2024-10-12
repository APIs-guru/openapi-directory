# ObjsComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** |  | 
**created** | **int** |  | 
**id** | **str** |  | 
**is_intro** | **bool** |  | 
**is_starred** | **bool** |  | [optional] 
**num_stars** | **int** |  | [optional] 
**pinned_info** | **object** |  | [optional] 
**pinned_to** | **List[str]** |  | [optional] 
**reactions** | [**List[ObjsReaction]**](ObjsReaction.md) |  | [optional] 
**timestamp** | **int** |  | 
**user** | **str** |  | 

## Example

```python
from openapi_client.models.objs_comment import ObjsComment

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsComment from a JSON string
objs_comment_instance = ObjsComment.from_json(json)
# print the JSON string representation of the object
print(ObjsComment.to_json())

# convert the object into a dict
objs_comment_dict = objs_comment_instance.to_dict()
# create an instance of ObjsComment from a dict
objs_comment_from_dict = ObjsComment.from_dict(objs_comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


