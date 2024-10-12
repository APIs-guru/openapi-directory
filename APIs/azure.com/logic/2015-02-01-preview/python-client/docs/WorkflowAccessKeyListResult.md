# WorkflowAccessKeyListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the URL to get the next set of results. | [optional] 
**value** | [**List[WorkflowAccessKey]**](WorkflowAccessKey.md) | Gets or sets a list of workflow access keys. | [optional] 

## Example

```python
from openapi_client.models.workflow_access_key_list_result import WorkflowAccessKeyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowAccessKeyListResult from a JSON string
workflow_access_key_list_result_instance = WorkflowAccessKeyListResult.from_json(json)
# print the JSON string representation of the object
print(WorkflowAccessKeyListResult.to_json())

# convert the object into a dict
workflow_access_key_list_result_dict = workflow_access_key_list_result_instance.to_dict()
# create an instance of WorkflowAccessKeyListResult from a dict
workflow_access_key_list_result_from_dict = WorkflowAccessKeyListResult.from_dict(workflow_access_key_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


