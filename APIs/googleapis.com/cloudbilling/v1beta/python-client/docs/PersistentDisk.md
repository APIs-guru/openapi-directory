# PersistentDisk

Specification of a persistent disk attached to a VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_size** | [**Usage**](Usage.md) |  | [optional] 
**disk_type** | **str** | The [disk type](https://cloud.google.com/compute/docs/disks#disk-types). For example: \&quot;pd-standard\&quot;. | [optional] 
**provisioned_iops** | [**Usage**](Usage.md) |  | [optional] 
**scope** | **str** | The geographic scope of the disk. Defaults to &#x60;SCOPE_ZONAL&#x60; if not specified. | [optional] 

## Example

```python
from openapi_client.models.persistent_disk import PersistentDisk

# TODO update the JSON string below
json = "{}"
# create an instance of PersistentDisk from a JSON string
persistent_disk_instance = PersistentDisk.from_json(json)
# print the JSON string representation of the object
print(PersistentDisk.to_json())

# convert the object into a dict
persistent_disk_dict = persistent_disk_instance.to_dict()
# create an instance of PersistentDisk from a dict
persistent_disk_from_dict = PersistentDisk.from_dict(persistent_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


