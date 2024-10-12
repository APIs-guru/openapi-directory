# RunbookUpdateParameters

The parameters supplied to the update runbook operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Gets or sets the location of the resource. | [optional] 
**name** | **str** | Gets or sets the name of the resource. | [optional] 
**properties** | [**RunbookUpdateProperties**](RunbookUpdateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Gets or sets the tags attached to the resource. | [optional] 

## Example

```python
from openapi_client.models.runbook_update_parameters import RunbookUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RunbookUpdateParameters from a JSON string
runbook_update_parameters_instance = RunbookUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(RunbookUpdateParameters.to_json())

# convert the object into a dict
runbook_update_parameters_dict = runbook_update_parameters_instance.to_dict()
# create an instance of RunbookUpdateParameters from a dict
runbook_update_parameters_from_dict = RunbookUpdateParameters.from_dict(runbook_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


