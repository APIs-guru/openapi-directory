# ListConfigurationAssignmentsResult

Response for ConfigurationAssignments list

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ConfigurationAssignment]**](ConfigurationAssignment.md) | The list of configuration Assignments | [optional] 

## Example

```python
from openapi_client.models.list_configuration_assignments_result import ListConfigurationAssignmentsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListConfigurationAssignmentsResult from a JSON string
list_configuration_assignments_result_instance = ListConfigurationAssignmentsResult.from_json(json)
# print the JSON string representation of the object
print(ListConfigurationAssignmentsResult.to_json())

# convert the object into a dict
list_configuration_assignments_result_dict = list_configuration_assignments_result_instance.to_dict()
# create an instance of ListConfigurationAssignmentsResult from a dict
list_configuration_assignments_result_from_dict = ListConfigurationAssignmentsResult.from_dict(list_configuration_assignments_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


