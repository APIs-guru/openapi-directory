# TargetComputeSizeProperties

Represents applicable recovery vm sizes properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_cores_count** | **int** | The maximum cpu cores count supported by target compute size. | [optional] 
**errors** | [**List[ComputeSizeErrorDetails]**](ComputeSizeErrorDetails.md) | The reasons why the target compute size is not applicable for the protected item. | [optional] 
**friendly_name** | **str** | Target compute size display name. | [optional] 
**high_iops_supported** | **str** | The value indicating whether the target compute size supports high Iops. | [optional] 
**max_data_disk_count** | **int** | The maximum data disks count supported by target compute size. | [optional] 
**max_nics_count** | **int** | The maximum Nics count supported by target compute size. | [optional] 
**memory_in_gb** | **float** | The maximum memory in GB supported by target compute size. | [optional] 
**name** | **str** | Target compute size name. | [optional] 

## Example

```python
from openapi_client.models.target_compute_size_properties import TargetComputeSizeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TargetComputeSizeProperties from a JSON string
target_compute_size_properties_instance = TargetComputeSizeProperties.from_json(json)
# print the JSON string representation of the object
print(TargetComputeSizeProperties.to_json())

# convert the object into a dict
target_compute_size_properties_dict = target_compute_size_properties_instance.to_dict()
# create an instance of TargetComputeSizeProperties from a dict
target_compute_size_properties_from_dict = TargetComputeSizeProperties.from_dict(target_compute_size_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


