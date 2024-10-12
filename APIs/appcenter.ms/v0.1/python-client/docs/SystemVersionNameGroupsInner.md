# SystemVersionNameGroupsInner

A response represents information about symbol name group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of version group | [optional] 
**versions** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.system_version_name_groups_inner import SystemVersionNameGroupsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SystemVersionNameGroupsInner from a JSON string
system_version_name_groups_inner_instance = SystemVersionNameGroupsInner.from_json(json)
# print the JSON string representation of the object
print(SystemVersionNameGroupsInner.to_json())

# convert the object into a dict
system_version_name_groups_inner_dict = system_version_name_groups_inner_instance.to_dict()
# create an instance of SystemVersionNameGroupsInner from a dict
system_version_name_groups_inner_from_dict = SystemVersionNameGroupsInner.from_dict(system_version_name_groups_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


