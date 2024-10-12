# ApplicationScopedVolumeCreationParametersServiceFabricVolumeDisk

Describes parameters for creating application-scoped volumes provided by Service Fabric Volume Disks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size_disk** | **str** | Volume size | 

## Example

```python
from openapi_client.models.application_scoped_volume_creation_parameters_service_fabric_volume_disk import ApplicationScopedVolumeCreationParametersServiceFabricVolumeDisk

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationScopedVolumeCreationParametersServiceFabricVolumeDisk from a JSON string
application_scoped_volume_creation_parameters_service_fabric_volume_disk_instance = ApplicationScopedVolumeCreationParametersServiceFabricVolumeDisk.from_json(json)
# print the JSON string representation of the object
print(ApplicationScopedVolumeCreationParametersServiceFabricVolumeDisk.to_json())

# convert the object into a dict
application_scoped_volume_creation_parameters_service_fabric_volume_disk_dict = application_scoped_volume_creation_parameters_service_fabric_volume_disk_instance.to_dict()
# create an instance of ApplicationScopedVolumeCreationParametersServiceFabricVolumeDisk from a dict
application_scoped_volume_creation_parameters_service_fabric_volume_disk_from_dict = ApplicationScopedVolumeCreationParametersServiceFabricVolumeDisk.from_dict(application_scoped_volume_creation_parameters_service_fabric_volume_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


