# ConfigurationAssignmentProperties

Properties for configuration assignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maintenance_configuration_id** | **str** | The maintenance configuration Id | [optional] 
**resource_id** | **str** | The unique resourceId | [optional] 

## Example

```python
from openapi_client.models.configuration_assignment_properties import ConfigurationAssignmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationAssignmentProperties from a JSON string
configuration_assignment_properties_instance = ConfigurationAssignmentProperties.from_json(json)
# print the JSON string representation of the object
print(ConfigurationAssignmentProperties.to_json())

# convert the object into a dict
configuration_assignment_properties_dict = configuration_assignment_properties_instance.to_dict()
# create an instance of ConfigurationAssignmentProperties from a dict
configuration_assignment_properties_from_dict = ConfigurationAssignmentProperties.from_dict(configuration_assignment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


