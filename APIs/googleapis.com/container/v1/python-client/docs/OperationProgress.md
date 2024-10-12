# OperationProgress

Information about operation (or operation stage) progress.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metrics** | [**List[Metric]**](Metric.md) | Progress metric bundle, for example: metrics: [{name: \&quot;nodes done\&quot;, int_value: 15}, {name: \&quot;nodes total\&quot;, int_value: 32}] or metrics: [{name: \&quot;progress\&quot;, double_value: 0.56}, {name: \&quot;progress scale\&quot;, double_value: 1.0}] | [optional] 
**name** | **str** | A non-parameterized string describing an operation stage. Unset for single-stage operations. | [optional] 
**stages** | [**List[OperationProgress]**](OperationProgress.md) | Substages of an operation or a stage. | [optional] 
**status** | **str** | Status of an operation stage. Unset for single-stage operations. | [optional] 

## Example

```python
from openapi_client.models.operation_progress import OperationProgress

# TODO update the JSON string below
json = "{}"
# create an instance of OperationProgress from a JSON string
operation_progress_instance = OperationProgress.from_json(json)
# print the JSON string representation of the object
print(OperationProgress.to_json())

# convert the object into a dict
operation_progress_dict = operation_progress_instance.to_dict()
# create an instance of OperationProgress from a dict
operation_progress_from_dict = OperationProgress.from_dict(operation_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


