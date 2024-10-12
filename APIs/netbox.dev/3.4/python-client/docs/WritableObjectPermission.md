# WritableObjectPermission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | The list of actions granted by this permission | 
**constraints** | **object** | Queryset filter matching the applicable objects of the selected type(s) | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**enabled** | **bool** |  | [optional] 
**groups** | **List[int]** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**object_types** | **List[str]** |  | 
**url** | **str** |  | [optional] [readonly] 
**users** | **List[int]** |  | [optional] 

## Example

```python
from openapi_client.models.writable_object_permission import WritableObjectPermission

# TODO update the JSON string below
json = "{}"
# create an instance of WritableObjectPermission from a JSON string
writable_object_permission_instance = WritableObjectPermission.from_json(json)
# print the JSON string representation of the object
print(WritableObjectPermission.to_json())

# convert the object into a dict
writable_object_permission_dict = writable_object_permission_instance.to_dict()
# create an instance of WritableObjectPermission from a dict
writable_object_permission_from_dict = WritableObjectPermission.from_dict(writable_object_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


