# InstanceSpec

InstanceSpec is a description of an instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_deadline_seconds** | **str** | Optional. Optional duration in seconds the instance may be active relative to StartTime before the system will actively try to mark it failed and kill associated containers. If set to zero, the system will never attempt to kill an instance based on time. Otherwise, value must be a positive integer. +optional | [optional] 
**containers** | [**List[Container]**](Container.md) | Optional. List of containers belonging to the instance. We disallow a number of fields on this Container. Only a single container may be provided. | [optional] 
**restart_policy** | **str** | Optional. Restart policy for all containers within the instance. Allowed values are: - OnFailure: Instances will always be restarted on failure if the backoffLimit has not been reached. - Never: Instances are never restarted and all failures are permanent. Cannot be used if backoffLimit is set. +optional | [optional] 
**service_account_name** | **str** | Optional. Email address of the IAM service account associated with the instance of a Job. The service account represents the identity of the running instance, and determines what permissions the instance has. If not provided, the instance will use the project&#39;s default service account. +optional | [optional] 
**termination_grace_period_seconds** | **str** | Optional. Optional duration in seconds the instance needs to terminate gracefully. Value must be non-negative integer. The value zero indicates delete immediately. The grace period is the duration in seconds after the processes running in the instance are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. +optional | [optional] 
**volumes** | [**List[Volume]**](Volume.md) | Optional. List of volumes that can be mounted by containers belonging to the instance. More info: https://kubernetes.io/docs/concepts/storage/volumes +optional | [optional] 

## Example

```python
from openapi_client.models.instance_spec import InstanceSpec

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceSpec from a JSON string
instance_spec_instance = InstanceSpec.from_json(json)
# print the JSON string representation of the object
print(InstanceSpec.to_json())

# convert the object into a dict
instance_spec_dict = instance_spec_instance.to_dict()
# create an instance of InstanceSpec from a dict
instance_spec_from_dict = InstanceSpec.from_dict(instance_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


