# SecondaryBootDisk

SecondaryBootDisk represents a persistent disk attached to a node with special configurations based on its mode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_image** | **str** | Fully-qualified resource ID for an existing disk image. | [optional] 
**mode** | **str** | Disk mode (container image cache, etc.) | [optional] 

## Example

```python
from openapi_client.models.secondary_boot_disk import SecondaryBootDisk

# TODO update the JSON string below
json = "{}"
# create an instance of SecondaryBootDisk from a JSON string
secondary_boot_disk_instance = SecondaryBootDisk.from_json(json)
# print the JSON string representation of the object
print(SecondaryBootDisk.to_json())

# convert the object into a dict
secondary_boot_disk_dict = secondary_boot_disk_instance.to_dict()
# create an instance of SecondaryBootDisk from a dict
secondary_boot_disk_from_dict = SecondaryBootDisk.from_dict(secondary_boot_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


