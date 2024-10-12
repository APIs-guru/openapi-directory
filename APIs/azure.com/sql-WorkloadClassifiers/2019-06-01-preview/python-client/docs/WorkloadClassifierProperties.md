# WorkloadClassifierProperties

Workload classifier definition. For more information look at sys.workload_management_workload_classifiers (DMV).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **str** | The workload classifier context. | [optional] 
**end_time** | **str** | The workload classifier end time for classification. | [optional] 
**importance** | **str** | The workload classifier importance. | [optional] 
**label** | **str** | The workload classifier label. | [optional] 
**member_name** | **str** | The workload classifier member name. | 
**start_time** | **str** | The workload classifier start time for classification. | [optional] 

## Example

```python
from openapi_client.models.workload_classifier_properties import WorkloadClassifierProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadClassifierProperties from a JSON string
workload_classifier_properties_instance = WorkloadClassifierProperties.from_json(json)
# print the JSON string representation of the object
print(WorkloadClassifierProperties.to_json())

# convert the object into a dict
workload_classifier_properties_dict = workload_classifier_properties_instance.to_dict()
# create an instance of WorkloadClassifierProperties from a dict
workload_classifier_properties_from_dict = WorkloadClassifierProperties.from_dict(workload_classifier_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


