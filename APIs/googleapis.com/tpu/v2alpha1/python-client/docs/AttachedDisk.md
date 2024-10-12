# AttachedDisk

A node-attached disk resource. Next ID: 8;

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | The mode in which to attach this disk. If not specified, the default is READ_WRITE mode. Only applicable to data_disks. | [optional] 
**source_disk** | **str** | Specifies the full path to an existing disk. For example: \&quot;projects/my-project/zones/us-central1-c/disks/my-disk\&quot;. | [optional] 

## Example

```python
from openapi_client.models.attached_disk import AttachedDisk

# TODO update the JSON string below
json = "{}"
# create an instance of AttachedDisk from a JSON string
attached_disk_instance = AttachedDisk.from_json(json)
# print the JSON string representation of the object
print(AttachedDisk.to_json())

# convert the object into a dict
attached_disk_dict = attached_disk_instance.to_dict()
# create an instance of AttachedDisk from a dict
attached_disk_from_dict = AttachedDisk.from_dict(attached_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


