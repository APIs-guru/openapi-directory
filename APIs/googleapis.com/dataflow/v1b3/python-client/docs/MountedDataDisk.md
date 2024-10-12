# MountedDataDisk

Describes mounted data disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_disk** | **str** | The name of the data disk. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example \&quot;myproject-1014-104817-4c2-harness-0-disk-1\&quot;. | [optional] 

## Example

```python
from openapi_client.models.mounted_data_disk import MountedDataDisk

# TODO update the JSON string below
json = "{}"
# create an instance of MountedDataDisk from a JSON string
mounted_data_disk_instance = MountedDataDisk.from_json(json)
# print the JSON string representation of the object
print(MountedDataDisk.to_json())

# convert the object into a dict
mounted_data_disk_dict = mounted_data_disk_instance.to_dict()
# create an instance of MountedDataDisk from a dict
mounted_data_disk_from_dict = MountedDataDisk.from_dict(mounted_data_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


