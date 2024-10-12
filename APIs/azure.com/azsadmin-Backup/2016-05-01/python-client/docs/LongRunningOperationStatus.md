# LongRunningOperationStatus

Status of a long running operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Operation result code. | [optional] [readonly] 
**message** | **str** | Description of the operation status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.long_running_operation_status import LongRunningOperationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of LongRunningOperationStatus from a JSON string
long_running_operation_status_instance = LongRunningOperationStatus.from_json(json)
# print the JSON string representation of the object
print(LongRunningOperationStatus.to_json())

# convert the object into a dict
long_running_operation_status_dict = long_running_operation_status_instance.to_dict()
# create an instance of LongRunningOperationStatus from a dict
long_running_operation_status_from_dict = LongRunningOperationStatus.from_dict(long_running_operation_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


