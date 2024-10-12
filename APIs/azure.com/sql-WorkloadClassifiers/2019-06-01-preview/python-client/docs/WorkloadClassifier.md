# WorkloadClassifier

Workload classifier operations for a data warehouse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WorkloadClassifierProperties**](WorkloadClassifierProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workload_classifier import WorkloadClassifier

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadClassifier from a JSON string
workload_classifier_instance = WorkloadClassifier.from_json(json)
# print the JSON string representation of the object
print(WorkloadClassifier.to_json())

# convert the object into a dict
workload_classifier_dict = workload_classifier_instance.to_dict()
# create an instance of WorkloadClassifier from a dict
workload_classifier_from_dict = WorkloadClassifier.from_dict(workload_classifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


