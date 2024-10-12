# LocalDiskInitializeParams

Input only. Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new runtime. This property is mutually exclusive with the source property; you can only define one or the other, but not both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. Provide this property when creating the disk. | [optional] 
**disk_name** | **str** | Optional. Specifies the disk name. If not specified, the default is to use the name of the instance. If the disk with the instance name exists already in the given zone/region, a new name will be automatically generated. | [optional] 
**disk_size_gb** | **str** | Optional. Specifies the size of the disk in base-2 GB. If not specified, the disk will be the same size as the image (usually 10GB). If specified, the size must be equal to or larger than 10GB. Default 100 GB. | [optional] 
**disk_type** | **str** | Input only. The type of the boot disk attached to this instance, defaults to standard persistent disk (&#x60;PD_STANDARD&#x60;). | [optional] 
**labels** | **Dict[str, str]** | Optional. Labels to apply to this disk. These can be later modified by the disks.setLabels method. This field is only applicable for persistent disks. | [optional] 

## Example

```python
from openapi_client.models.local_disk_initialize_params import LocalDiskInitializeParams

# TODO update the JSON string below
json = "{}"
# create an instance of LocalDiskInitializeParams from a JSON string
local_disk_initialize_params_instance = LocalDiskInitializeParams.from_json(json)
# print the JSON string representation of the object
print(LocalDiskInitializeParams.to_json())

# convert the object into a dict
local_disk_initialize_params_dict = local_disk_initialize_params_instance.to_dict()
# create an instance of LocalDiskInitializeParams from a dict
local_disk_initialize_params_from_dict = LocalDiskInitializeParams.from_dict(local_disk_initialize_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


