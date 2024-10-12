# DriveModel

Properties of a drive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Detailed recommended action for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok. | [optional] [readonly] 
**capacity_gb** | **int** | Total capacity in GB of the drive. | [optional] [readonly] 
**description** | **str** | Detailed description for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok. | [optional] [readonly] 
**firmware_version** | **str** | The firmware version of the drive. | [optional] [readonly] 
**health_status** | **str** | Health status of the drive. | [optional] [readonly] 
**is_indication_enabled** | **bool** | Indicate whether the drive&#39;s identification LEDs are active or not. | [optional] [readonly] 
**manufacturer** | **str** | The name of the drive&#39;s manufacturer. | [optional] [readonly] 
**media_type** | **str** | Media type of the drive. | [optional] [readonly] 
**model** | **str** | Model of the drive. | [optional] [readonly] 
**operational_status** | **str** | Operational status of the drive. | [optional] [readonly] 
**physical_location** | **str** | Indicate where the hardware is located. | [optional] [readonly] 
**serial_number** | **str** | Serial number of the drive. | [optional] [readonly] 
**storage_node** | **str** | Node that the drive is physically connected. | [optional] [readonly] 
**storage_pool** | **str** | The storage pool where the drive is located. | [optional] [readonly] 
**usage** | **str** | Intended usage of the drive. | [optional] [readonly] 

## Example

```python
from openapi_client.models.drive_model import DriveModel

# TODO update the JSON string below
json = "{}"
# create an instance of DriveModel from a JSON string
drive_model_instance = DriveModel.from_json(json)
# print the JSON string representation of the object
print(DriveModel.to_json())

# convert the object into a dict
drive_model_dict = drive_model_instance.to_dict()
# create an instance of DriveModel from a dict
drive_model_from_dict = DriveModel.from_dict(drive_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


