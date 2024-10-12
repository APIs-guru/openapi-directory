# WritePermissionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_add** | **bool** |  | [optional] 
**can_delete** | **bool** |  | [optional] 
**can_edit** | **bool** |  | [optional] 
**max_daily_actions** | **int** |  | [optional] 
**min_seconds_between_actions** | **int** |  | [optional] 
**object_type** | **str** |  | [optional] 
**user_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.write_permissions_inner import WritePermissionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of WritePermissionsInner from a JSON string
write_permissions_inner_instance = WritePermissionsInner.from_json(json)
# print the JSON string representation of the object
print(WritePermissionsInner.to_json())

# convert the object into a dict
write_permissions_inner_dict = write_permissions_inner_instance.to_dict()
# create an instance of WritePermissionsInner from a dict
write_permissions_inner_from_dict = WritePermissionsInner.from_dict(write_permissions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


