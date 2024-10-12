# DiskExclusionProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_lun_list** | **List[int]** | List of Disks&#39; Logical Unit Numbers (LUN) to be used for VM Protection. | [optional] 
**is_inclusion_list** | **bool** | Flag to indicate whether DiskLunList is to be included/ excluded from backup. | [optional] 

## Example

```python
from openapi_client.models.disk_exclusion_properties import DiskExclusionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DiskExclusionProperties from a JSON string
disk_exclusion_properties_instance = DiskExclusionProperties.from_json(json)
# print the JSON string representation of the object
print(DiskExclusionProperties.to_json())

# convert the object into a dict
disk_exclusion_properties_dict = disk_exclusion_properties_instance.to_dict()
# create an instance of DiskExclusionProperties from a dict
disk_exclusion_properties_from_dict = DiskExclusionProperties.from_dict(disk_exclusion_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


