# OperationStatus

Operation status object. Operation refers to the asynchronous backend task including taking a snapshot and applying a snapshot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **datetime** | A combined UTC date and time string that describes the time when the operation (take or apply a snapshot) is requested. E.g. 2018-12-25T11:41:02.2331413Z. | 
**last_action_time** | **datetime** | A combined UTC date and time string that describes the last time the operation (take or apply a snapshot) is actively migrating data. The lastActionTime will keep increasing until the operation finishes. E.g. 2018-12-25T11:51:27.8705696Z. | [optional] 
**message** | **str** | Show failure message when operation fails (omitted when operation succeeds). | [optional] 
**resource_location** | **str** | When the operation succeeds successfully, for snapshot taking operation the snapshot id will be included in this field, and for snapshot applying operation, the path to get the target object will be returned in this field. | [optional] 
**status** | **str** | Operation status: notstarted, running, succeeded, failed. If the operation is requested and waiting to perform, the status is notstarted. If the operation is ongoing in backend, the status is running. Status succeeded means the operation is completed successfully, specifically for snapshot taking operation, it illustrates the snapshot is well taken and ready to apply, and for snapshot applying operation, it presents the target object has finished creating by the snapshot and ready to be used. Status failed is often caused by editing the source object while taking the snapshot or editing the target object while applying the snapshot before completion, see the field \&quot;message\&quot; to check the failure reason. | 

## Example

```python
from openapi_client.models.operation_status import OperationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of OperationStatus from a JSON string
operation_status_instance = OperationStatus.from_json(json)
# print the JSON string representation of the object
print(OperationStatus.to_json())

# convert the object into a dict
operation_status_dict = operation_status_instance.to_dict()
# create an instance of OperationStatus from a dict
operation_status_from_dict = OperationStatus.from_dict(operation_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


