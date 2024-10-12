# RunbookCreateOrUpdateParameters

The parameters supplied to the create or update runbook operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Gets or sets the location of the resource. | [optional] 
**name** | **str** | Gets or sets the name of the resource. | [optional] 
**properties** | [**RunbookCreateOrUpdateProperties**](RunbookCreateOrUpdateProperties.md) |  | 
**tags** | **Dict[str, str]** | Gets or sets the tags attached to the resource. | [optional] 

## Example

```python
from openapi_client.models.runbook_create_or_update_parameters import RunbookCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RunbookCreateOrUpdateParameters from a JSON string
runbook_create_or_update_parameters_instance = RunbookCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(RunbookCreateOrUpdateParameters.to_json())

# convert the object into a dict
runbook_create_or_update_parameters_dict = runbook_create_or_update_parameters_instance.to_dict()
# create an instance of RunbookCreateOrUpdateParameters from a dict
runbook_create_or_update_parameters_from_dict = RunbookCreateOrUpdateParameters.from_dict(runbook_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


