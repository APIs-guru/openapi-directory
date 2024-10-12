# WorkloadClassifierListResult

A list of workload classifiers for a workload group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[WorkloadClassifier]**](WorkloadClassifier.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workload_classifier_list_result import WorkloadClassifierListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadClassifierListResult from a JSON string
workload_classifier_list_result_instance = WorkloadClassifierListResult.from_json(json)
# print the JSON string representation of the object
print(WorkloadClassifierListResult.to_json())

# convert the object into a dict
workload_classifier_list_result_dict = workload_classifier_list_result_instance.to_dict()
# create an instance of WorkloadClassifierListResult from a dict
workload_classifier_list_result_from_dict = WorkloadClassifierListResult.from_dict(workload_classifier_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


