# PersistentDisk

Configuration for a persistent disk to be attached to the VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size_gb** | **int** | The size, in GB, of the disk to attach. If the size is not specified, a default is chosen to ensure reasonable I/O performance. If the disk type is specified as &#x60;local-ssd&#x60;, multiple local drives are automatically combined to provide the requested size. Note, however, that each physical SSD is 375GB in size, and no more than 8 drives can be attached to a single instance. | [optional] 
**source_image** | **str** | An image to put on the disk before attaching it to the VM. | [optional] 
**type** | **str** | The Compute Engine disk type. If unspecified, &#x60;pd-standard&#x60; is used. | [optional] 

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


