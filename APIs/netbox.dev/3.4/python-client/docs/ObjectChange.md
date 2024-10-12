# ObjectChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**Action**](Action.md) |  | [optional] 
**changed_object** | **object** |  Serialize a nested representation of the changed object.  | [optional] [readonly] 
**changed_object_id** | **int** |  | 
**changed_object_type** | **str** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**postchange_data** | **object** |  | [optional] [readonly] 
**prechange_data** | **object** |  | [optional] [readonly] 
**request_id** | **str** |  | [optional] [readonly] 
**time** | **datetime** |  | [optional] [readonly] 
**url** | **str** |  | [optional] [readonly] 
**user** | [**NestedUser**](NestedUser.md) |  | [optional] 
**user_name** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.object_change import ObjectChange

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectChange from a JSON string
object_change_instance = ObjectChange.from_json(json)
# print the JSON string representation of the object
print(ObjectChange.to_json())

# convert the object into a dict
object_change_dict = object_change_instance.to_dict()
# create an instance of ObjectChange from a dict
object_change_from_dict = ObjectChange.from_dict(object_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


