# ConfigurationVariables

A configuration variables resource contains the managed configuration settings ID to be applied to a single user, as well as the variable set that is attributed to the user. The variable set will be used to replace placeholders in the managed configuration settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mcm_id** | **str** | The ID of the managed configurations settings. | [optional] 
**variable_set** | [**List[VariableSet]**](VariableSet.md) | The variable set that is attributed to the user. | [optional] 

## Example

```python
from openapi_client.models.configuration_variables import ConfigurationVariables

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationVariables from a JSON string
configuration_variables_instance = ConfigurationVariables.from_json(json)
# print the JSON string representation of the object
print(ConfigurationVariables.to_json())

# convert the object into a dict
configuration_variables_dict = configuration_variables_instance.to_dict()
# create an instance of ConfigurationVariables from a dict
configuration_variables_from_dict = ConfigurationVariables.from_dict(configuration_variables_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


