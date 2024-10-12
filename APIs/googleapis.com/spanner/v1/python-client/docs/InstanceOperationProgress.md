# InstanceOperationProgress

Encapsulates progress related information for a Cloud Spanner long running instance operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | If set, the time at which this operation failed or was completed successfully. | [optional] 
**progress_percent** | **int** | Percent completion of the operation. Values are between 0 and 100 inclusive. | [optional] 
**start_time** | **str** | Time the request was received. | [optional] 

## Example

```python
from openapi_client.models.instance_operation_progress import InstanceOperationProgress

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceOperationProgress from a JSON string
instance_operation_progress_instance = InstanceOperationProgress.from_json(json)
# print the JSON string representation of the object
print(InstanceOperationProgress.to_json())

# convert the object into a dict
instance_operation_progress_dict = instance_operation_progress_instance.to_dict()
# create an instance of InstanceOperationProgress from a dict
instance_operation_progress_from_dict = InstanceOperationProgress.from_dict(instance_operation_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


