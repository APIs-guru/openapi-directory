# WorkloadReference

Reference of an underlying compute resource represented by the Workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Output only. The underlying compute resource uri. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workload_reference import WorkloadReference

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadReference from a JSON string
workload_reference_instance = WorkloadReference.from_json(json)
# print the JSON string representation of the object
print(WorkloadReference.to_json())

# convert the object into a dict
workload_reference_dict = workload_reference_instance.to_dict()
# create an instance of WorkloadReference from a dict
workload_reference_from_dict = WorkloadReference.from_dict(workload_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


