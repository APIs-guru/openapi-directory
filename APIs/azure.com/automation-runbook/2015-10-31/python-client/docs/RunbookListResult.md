# RunbookListResult

The response model for the list runbook operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[Runbook]**](Runbook.md) | Gets or sets a list of runbooks. | [optional] 

## Example

```python
from openapi_client.models.runbook_list_result import RunbookListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RunbookListResult from a JSON string
runbook_list_result_instance = RunbookListResult.from_json(json)
# print the JSON string representation of the object
print(RunbookListResult.to_json())

# convert the object into a dict
runbook_list_result_dict = runbook_list_result_instance.to_dict()
# create an instance of RunbookListResult from a dict
runbook_list_result_from_dict = RunbookListResult.from_dict(runbook_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


