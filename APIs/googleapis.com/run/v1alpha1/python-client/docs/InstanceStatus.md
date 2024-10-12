# InstanceStatus

Instance represents the status of an instance of a Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion_time** | **str** | Optional. Represents time when the instance was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional | [optional] 
**failed** | **int** | Optional. The number of times this instance exited with code &gt; 0; +optional | [optional] 
**index** | **int** | Required. Index of the instance, unique per Job, and beginning at 0. | [optional] 
**last_attempt_result** | [**InstanceAttemptResult**](InstanceAttemptResult.md) |  | [optional] 
**last_exit_code** | **int** | Optional. Last exit code seen for this instance. +optional | [optional] 
**restarted** | **int** | Optional. The number of times this instance was restarted. Instances are restarted according the restartPolicy configured in the Job template. +optional | [optional] 
**start_time** | **str** | Optional. Represents time when the instance was created by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional | [optional] 
**succeeded** | **int** | Optional. The number of times this instance exited with code &#x3D;&#x3D; 0. +optional | [optional] 

## Example

```python
from openapi_client.models.instance_status import InstanceStatus

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceStatus from a JSON string
instance_status_instance = InstanceStatus.from_json(json)
# print the JSON string representation of the object
print(InstanceStatus.to_json())

# convert the object into a dict
instance_status_dict = instance_status_instance.to_dict()
# create an instance of InstanceStatus from a dict
instance_status_from_dict = InstanceStatus.from_dict(instance_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


