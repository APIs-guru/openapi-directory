# ConfigurationAssignment

Configuration Assignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of the resource | [optional] 
**properties** | [**ConfigurationAssignmentProperties**](ConfigurationAssignmentProperties.md) |  | [optional] 
**id** | **str** | Fully qualified identifier of the resource | [optional] [readonly] 
**name** | **str** | Name of the resource | [optional] [readonly] 
**type** | **str** | Type of the resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.configuration_assignment import ConfigurationAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationAssignment from a JSON string
configuration_assignment_instance = ConfigurationAssignment.from_json(json)
# print the JSON string representation of the object
print(ConfigurationAssignment.to_json())

# convert the object into a dict
configuration_assignment_dict = configuration_assignment_instance.to_dict()
# create an instance of ConfigurationAssignment from a dict
configuration_assignment_from_dict = ConfigurationAssignment.from_dict(configuration_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


