# VolumeModel

Properties of a volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Detailed recommended action for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok. | [optional] 
**description** | **str** | Detailed description for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok. | [optional] 
**health_status** | **str** | Health status of the volume. | [optional] 
**operational_status** | **str** | Operational status of the volume. | [optional] 
**remaining_capacity_gb** | **int** | Remaining capacity in GB of the volume. | [optional] 
**repair_status** | **str** | Repair status of the volume. Empty if no repair job running, something like &#39;Running, 90%&#39; when repairing. | [optional] 
**total_capacity_gb** | **int** | Total capacity in GB of the volume. | [optional] 
**volume_label** | **str** | Volume label. | [optional] 

## Example

```python
from openapi_client.models.volume_model import VolumeModel

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeModel from a JSON string
volume_model_instance = VolumeModel.from_json(json)
# print the JSON string representation of the object
print(VolumeModel.to_json())

# convert the object into a dict
volume_model_dict = volume_model_instance.to_dict()
# create an instance of VolumeModel from a dict
volume_model_from_dict = VolumeModel.from_dict(volume_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


