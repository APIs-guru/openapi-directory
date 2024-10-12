# DiskProperties

Managed disk properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actual_size_gb** | **int** | The actual size of disk in GB. | [optional] [readonly] 
**disk_id** | **str** | The disk id. | [optional] 
**disk_sku** | **str** | Disk Sku. | [optional] 
**disk_type** | **str** | Disk resource type. | [optional] 
**managed_by** | **str** | Compute resource Uri which owns this disk. | [optional] [readonly] 
**provision_size_gb** | **int** | The provision size of disk in GB. | [optional] [readonly] 
**share_path** | **str** | The disk share path. | [optional] 
**status** | **str** | Disk State. | [optional] 
**user_resource_id** | **str** | The disk resource Uri from user view. | [optional] [readonly] 

## Example

```python
from openapi_client.models.disk_properties import DiskProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DiskProperties from a JSON string
disk_properties_instance = DiskProperties.from_json(json)
# print the JSON string representation of the object
print(DiskProperties.to_json())

# convert the object into a dict
disk_properties_dict = disk_properties_instance.to_dict()
# create an instance of DiskProperties from a dict
disk_properties_from_dict = DiskProperties.from_dict(disk_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


