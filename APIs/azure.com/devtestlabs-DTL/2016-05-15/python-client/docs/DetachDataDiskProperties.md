# DetachDataDiskProperties

Request body for detaching data disk from a virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**existing_lab_disk_id** | **str** | Specifies the disk resource ID to detach from virtual machine. | [optional] 

## Example

```python
from openapi_client.models.detach_data_disk_properties import DetachDataDiskProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DetachDataDiskProperties from a JSON string
detach_data_disk_properties_instance = DetachDataDiskProperties.from_json(json)
# print the JSON string representation of the object
print(DetachDataDiskProperties.to_json())

# convert the object into a dict
detach_data_disk_properties_dict = detach_data_disk_properties_instance.to_dict()
# create an instance of DetachDataDiskProperties from a dict
detach_data_disk_properties_from_dict = DetachDataDiskProperties.from_dict(detach_data_disk_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


