# PosixGroup

POSIX Group definition to represent a group in a POSIX compliant system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **str** | GID of the POSIX group. | [optional] 
**name** | **str** | Name of the POSIX group. | [optional] 
**system_id** | **str** | System identifier for which group name and gid apply to. If not specified it will default to empty value. | [optional] 

## Example

```python
from openapi_client.models.posix_group import PosixGroup

# TODO update the JSON string below
json = "{}"
# create an instance of PosixGroup from a JSON string
posix_group_instance = PosixGroup.from_json(json)
# print the JSON string representation of the object
print(PosixGroup.to_json())

# convert the object into a dict
posix_group_dict = posix_group_instance.to_dict()
# create an instance of PosixGroup from a dict
posix_group_from_dict = PosixGroup.from_dict(posix_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


