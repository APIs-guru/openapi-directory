# SecurityGroupViewParameters

Parameters that define the VM to check security groups for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_resource_id** | **str** | ID of the target VM. | 

## Example

```python
from openapi_client.models.security_group_view_parameters import SecurityGroupViewParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityGroupViewParameters from a JSON string
security_group_view_parameters_instance = SecurityGroupViewParameters.from_json(json)
# print the JSON string representation of the object
print(SecurityGroupViewParameters.to_json())

# convert the object into a dict
security_group_view_parameters_dict = security_group_view_parameters_instance.to_dict()
# create an instance of SecurityGroupViewParameters from a dict
security_group_view_parameters_from_dict = SecurityGroupViewParameters.from_dict(security_group_view_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


