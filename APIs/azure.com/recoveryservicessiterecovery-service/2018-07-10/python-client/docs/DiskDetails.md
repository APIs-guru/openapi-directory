# DiskDetails

On-prem disk details data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_size_mb** | **int** | The hard disk max size in MB. | [optional] 
**vhd_id** | **str** | The VHD Id. | [optional] 
**vhd_name** | **str** | The VHD name. | [optional] 
**vhd_type** | **str** | The type of the volume. | [optional] 

## Example

```python
from openapi_client.models.disk_details import DiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DiskDetails from a JSON string
disk_details_instance = DiskDetails.from_json(json)
# print the JSON string representation of the object
print(DiskDetails.to_json())

# convert the object into a dict
disk_details_dict = disk_details_instance.to_dict()
# create an instance of DiskDetails from a dict
disk_details_from_dict = DiskDetails.from_dict(disk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


