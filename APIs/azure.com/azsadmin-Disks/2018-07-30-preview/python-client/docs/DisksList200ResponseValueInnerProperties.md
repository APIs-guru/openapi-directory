# DisksList200ResponseValueInnerProperties

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
from openapi_client.models.disks_list200_response_value_inner_properties import DisksList200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DisksList200ResponseValueInnerProperties from a JSON string
disks_list200_response_value_inner_properties_instance = DisksList200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(DisksList200ResponseValueInnerProperties.to_json())

# convert the object into a dict
disks_list200_response_value_inner_properties_dict = disks_list200_response_value_inner_properties_instance.to_dict()
# create an instance of DisksList200ResponseValueInnerProperties from a dict
disks_list200_response_value_inner_properties_from_dict = DisksList200ResponseValueInnerProperties.from_dict(disks_list200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


