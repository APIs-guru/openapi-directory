# SystemVersionNameGroup

A response represents information about symbol name group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of version group | [optional] 
**versions** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.system_version_name_group import SystemVersionNameGroup

# TODO update the JSON string below
json = "{}"
# create an instance of SystemVersionNameGroup from a JSON string
system_version_name_group_instance = SystemVersionNameGroup.from_json(json)
# print the JSON string representation of the object
print(SystemVersionNameGroup.to_json())

# convert the object into a dict
system_version_name_group_dict = system_version_name_group_instance.to_dict()
# create an instance of SystemVersionNameGroup from a dict
system_version_name_group_from_dict = SystemVersionNameGroup.from_dict(system_version_name_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


