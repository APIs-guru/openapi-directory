# ReportedParallelism

Represents the level of parallelism in a WorkItem's input, reported by the worker.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_infinite** | **bool** | Specifies whether the parallelism is infinite. If true, \&quot;value\&quot; is ignored. Infinite parallelism means the service will assume that the work item can always be split into more non-empty work items by dynamic splitting. This is a work-around for lack of support for infinity by the current JSON-based Java RPC stack. | [optional] 
**value** | **float** | Specifies the level of parallelism in case it is finite. | [optional] 

## Example

```python
from openapi_client.models.reported_parallelism import ReportedParallelism

# TODO update the JSON string below
json = "{}"
# create an instance of ReportedParallelism from a JSON string
reported_parallelism_instance = ReportedParallelism.from_json(json)
# print the JSON string representation of the object
print(ReportedParallelism.to_json())

# convert the object into a dict
reported_parallelism_dict = reported_parallelism_instance.to_dict()
# create an instance of ReportedParallelism from a dict
reported_parallelism_from_dict = ReportedParallelism.from_dict(reported_parallelism_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


