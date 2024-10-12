# AssignmentOsType

Defines the criteria for selecting VM Instances by OS type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os_architecture** | **str** | Targets VM instances with OS Inventory enabled and having the following OS architecture. | [optional] 
**os_short_name** | **str** | Targets VM instances with OS Inventory enabled and having the following OS short name, for example \&quot;debian\&quot; or \&quot;windows\&quot;. | [optional] 
**os_version** | **str** | Targets VM instances with OS Inventory enabled and having the following following OS version. | [optional] 

## Example

```python
from openapi_client.models.assignment_os_type import AssignmentOsType

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentOsType from a JSON string
assignment_os_type_instance = AssignmentOsType.from_json(json)
# print the JSON string representation of the object
print(AssignmentOsType.to_json())

# convert the object into a dict
assignment_os_type_dict = assignment_os_type_instance.to_dict()
# create an instance of AssignmentOsType from a dict
assignment_os_type_from_dict = AssignmentOsType.from_dict(assignment_os_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


