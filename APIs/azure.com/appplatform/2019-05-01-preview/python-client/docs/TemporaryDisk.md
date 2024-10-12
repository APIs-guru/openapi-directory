# TemporaryDisk

Temporary disk payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mount_path** | **str** | Mount path of the temporary disk | [optional] 
**size_in_gb** | **int** | Size of the temporary disk in GB | [optional] 

## Example

```python
from openapi_client.models.temporary_disk import TemporaryDisk

# TODO update the JSON string below
json = "{}"
# create an instance of TemporaryDisk from a JSON string
temporary_disk_instance = TemporaryDisk.from_json(json)
# print the JSON string representation of the object
print(TemporaryDisk.to_json())

# convert the object into a dict
temporary_disk_dict = temporary_disk_instance.to_dict()
# create an instance of TemporaryDisk from a dict
temporary_disk_from_dict = TemporaryDisk.from_dict(temporary_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


