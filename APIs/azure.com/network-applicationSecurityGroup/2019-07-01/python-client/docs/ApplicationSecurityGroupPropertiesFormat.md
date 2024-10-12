# ApplicationSecurityGroupPropertiesFormat

Application security group properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**resource_guid** | **str** | The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_security_group_properties_format import ApplicationSecurityGroupPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationSecurityGroupPropertiesFormat from a JSON string
application_security_group_properties_format_instance = ApplicationSecurityGroupPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationSecurityGroupPropertiesFormat.to_json())

# convert the object into a dict
application_security_group_properties_format_dict = application_security_group_properties_format_instance.to_dict()
# create an instance of ApplicationSecurityGroupPropertiesFormat from a dict
application_security_group_properties_format_from_dict = ApplicationSecurityGroupPropertiesFormat.from_dict(application_security_group_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


