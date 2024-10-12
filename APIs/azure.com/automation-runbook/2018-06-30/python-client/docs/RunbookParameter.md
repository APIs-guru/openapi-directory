# RunbookParameter

Definition of the runbook parameter type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **str** | Gets or sets the default value of parameter. | [optional] 
**is_mandatory** | **bool** | Gets or sets a Boolean value to indicate whether the parameter is mandatory or not. | [optional] 
**position** | **int** | Get or sets the position of the parameter. | [optional] 
**type** | **str** | Gets or sets the type of the parameter. | [optional] 

## Example

```python
from openapi_client.models.runbook_parameter import RunbookParameter

# TODO update the JSON string below
json = "{}"
# create an instance of RunbookParameter from a JSON string
runbook_parameter_instance = RunbookParameter.from_json(json)
# print the JSON string representation of the object
print(RunbookParameter.to_json())

# convert the object into a dict
runbook_parameter_dict = runbook_parameter_instance.to_dict()
# create an instance of RunbookParameter from a dict
runbook_parameter_from_dict = RunbookParameter.from_dict(runbook_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


