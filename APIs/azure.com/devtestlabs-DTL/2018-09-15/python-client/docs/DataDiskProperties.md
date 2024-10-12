# DataDiskProperties

Request body for adding a new or existing data disk to a virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attach_new_data_disk_options** | [**AttachNewDataDiskOptions**](AttachNewDataDiskOptions.md) |  | [optional] 
**existing_lab_disk_id** | **str** | Specifies the existing lab disk id to attach to virtual machine. | [optional] 
**host_caching** | **str** | Caching option for a data disk (i.e. None, ReadOnly, ReadWrite). | [optional] 

## Example

```python
from openapi_client.models.data_disk_properties import DataDiskProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataDiskProperties from a JSON string
data_disk_properties_instance = DataDiskProperties.from_json(json)
# print the JSON string representation of the object
print(DataDiskProperties.to_json())

# convert the object into a dict
data_disk_properties_dict = data_disk_properties_instance.to_dict()
# create an instance of DataDiskProperties from a dict
data_disk_properties_from_dict = DataDiskProperties.from_dict(data_disk_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


