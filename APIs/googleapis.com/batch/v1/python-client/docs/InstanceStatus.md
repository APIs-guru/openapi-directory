# InstanceStatus

VM instance status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boot_disk** | [**Disk**](Disk.md) |  | [optional] 
**machine_type** | **str** | The Compute Engine machine type. | [optional] 
**provisioning_model** | **str** | The VM instance provisioning model. | [optional] 
**task_pack** | **str** | The max number of tasks can be assigned to this instance type. | [optional] 

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


