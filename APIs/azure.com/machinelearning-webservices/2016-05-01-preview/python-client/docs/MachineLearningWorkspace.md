# MachineLearningWorkspace

Information about the machine learning workspace containing the experiment that is source for the web service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Specifies the workspace ID of the machine learning workspace associated with the web service | 

## Example

```python
from openapi_client.models.machine_learning_workspace import MachineLearningWorkspace

# TODO update the JSON string below
json = "{}"
# create an instance of MachineLearningWorkspace from a JSON string
machine_learning_workspace_instance = MachineLearningWorkspace.from_json(json)
# print the JSON string representation of the object
print(MachineLearningWorkspace.to_json())

# convert the object into a dict
machine_learning_workspace_dict = machine_learning_workspace_instance.to_dict()
# create an instance of MachineLearningWorkspace from a dict
machine_learning_workspace_from_dict = MachineLearningWorkspace.from_dict(machine_learning_workspace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


