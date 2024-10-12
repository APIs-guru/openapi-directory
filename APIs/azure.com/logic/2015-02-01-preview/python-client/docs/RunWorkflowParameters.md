# RunWorkflowParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of workflow run trigger. | [optional] 
**outputs** | **object** | Gets or sets the outputs of workflow run trigger. | [optional] 

## Example

```python
from openapi_client.models.run_workflow_parameters import RunWorkflowParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RunWorkflowParameters from a JSON string
run_workflow_parameters_instance = RunWorkflowParameters.from_json(json)
# print the JSON string representation of the object
print(RunWorkflowParameters.to_json())

# convert the object into a dict
run_workflow_parameters_dict = run_workflow_parameters_instance.to_dict()
# create an instance of RunWorkflowParameters from a dict
run_workflow_parameters_from_dict = RunWorkflowParameters.from_dict(run_workflow_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


