# ObjectPermission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | The list of actions granted by this permission | 
**constraints** | **object** | Queryset filter matching the applicable objects of the selected type(s) | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**enabled** | **bool** |  | [optional] 
**groups** | [**List[NestedGroup]**](NestedGroup.md) |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**object_types** | **List[str]** |  | 
**url** | **str** |  | [optional] [readonly] 
**users** | [**List[NestedUser]**](NestedUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.object_permission import ObjectPermission

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectPermission from a JSON string
object_permission_instance = ObjectPermission.from_json(json)
# print the JSON string representation of the object
print(ObjectPermission.to_json())

# convert the object into a dict
object_permission_dict = object_permission_instance.to_dict()
# create an instance of ObjectPermission from a dict
object_permission_from_dict = ObjectPermission.from_dict(object_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


