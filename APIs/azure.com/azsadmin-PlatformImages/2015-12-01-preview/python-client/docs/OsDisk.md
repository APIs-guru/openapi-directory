# OsDisk

Operating system disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os_type** | [**OsType**](OsType.md) |  | [optional] 
**uri** | **str** | Location of the disk. | [optional] 

## Example

```python
from openapi_client.models.os_disk import OsDisk

# TODO update the JSON string below
json = "{}"
# create an instance of OsDisk from a JSON string
os_disk_instance = OsDisk.from_json(json)
# print the JSON string representation of the object
print(OsDisk.to_json())

# convert the object into a dict
os_disk_dict = os_disk_instance.to_dict()
# create an instance of OsDisk from a dict
os_disk_from_dict = OsDisk.from_dict(os_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


