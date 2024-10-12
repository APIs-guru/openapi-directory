# AttachNewDataDiskOptions

Properties to attach new disk to the Virtual Machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_name** | **str** | The name of the disk to be attached. | [optional] 
**disk_size_gi_b** | **int** | Size of the disk to be attached in GibiBytes. | [optional] 
**disk_type** | **str** | The storage type for the disk (i.e. Standard, Premium). | [optional] 

## Example

```python
from openapi_client.models.attach_new_data_disk_options import AttachNewDataDiskOptions

# TODO update the JSON string below
json = "{}"
# create an instance of AttachNewDataDiskOptions from a JSON string
attach_new_data_disk_options_instance = AttachNewDataDiskOptions.from_json(json)
# print the JSON string representation of the object
print(AttachNewDataDiskOptions.to_json())

# convert the object into a dict
attach_new_data_disk_options_dict = attach_new_data_disk_options_instance.to_dict()
# create an instance of AttachNewDataDiskOptions from a dict
attach_new_data_disk_options_from_dict = AttachNewDataDiskOptions.from_dict(attach_new_data_disk_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


