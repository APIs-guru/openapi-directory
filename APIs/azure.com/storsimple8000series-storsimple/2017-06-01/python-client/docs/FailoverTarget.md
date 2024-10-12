# FailoverTarget

Represents the eligibility of a device as a failover target device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_local_storage_in_bytes** | **int** | The amount of free local storage available on the device in bytes. | [optional] 
**available_tiered_storage_in_bytes** | **int** | The amount of free tiered storage available for the device in bytes. | [optional] 
**data_containers_count** | **int** | The count of data containers on the device. | [optional] 
**device_id** | **str** | The path ID of the device. | [optional] 
**device_location** | **str** | The geo location (applicable only for cloud appliances) of the device. | [optional] 
**device_software_version** | **str** | The software version of the device. | [optional] 
**device_status** | **str** | The status of the device. | [optional] 
**eligibility_result** | [**TargetEligibilityResult**](TargetEligibilityResult.md) |  | [optional] 
**friendly_device_software_version** | **str** | The friendly name for the current version of software on the device. | [optional] 
**model_description** | **str** | The model number of the device. | [optional] 
**volumes_count** | **int** | The count of volumes on the device. | [optional] 

## Example

```python
from openapi_client.models.failover_target import FailoverTarget

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverTarget from a JSON string
failover_target_instance = FailoverTarget.from_json(json)
# print the JSON string representation of the object
print(FailoverTarget.to_json())

# convert the object into a dict
failover_target_dict = failover_target_instance.to_dict()
# create an instance of FailoverTarget from a dict
failover_target_from_dict = FailoverTarget.from_dict(failover_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


