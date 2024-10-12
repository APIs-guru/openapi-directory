# ExistingDisk

Configuration for an existing disk to be attached to the VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk** | **str** | If &#x60;disk&#x60; contains slashes, the Cloud Life Sciences API assumes that it is a complete URL for the disk. If &#x60;disk&#x60; does not contain slashes, the Cloud Life Sciences API assumes that the disk is a zonal disk and a URL will be generated of the form &#x60;zones//disks/&#x60;, where &#x60;&#x60; is the zone in which the instance is allocated. The disk must be ext4 formatted. If all &#x60;Mount&#x60; references to this disk have the &#x60;read_only&#x60; flag set to true, the disk will be attached in &#x60;read-only&#x60; mode and can be shared with other instances. Otherwise, the disk will be available for writing but cannot be shared. | [optional] 

## Example

```python
from openapi_client.models.existing_disk import ExistingDisk

# TODO update the JSON string below
json = "{}"
# create an instance of ExistingDisk from a JSON string
existing_disk_instance = ExistingDisk.from_json(json)
# print the JSON string representation of the object
print(ExistingDisk.to_json())

# convert the object into a dict
existing_disk_dict = existing_disk_instance.to_dict()
# create an instance of ExistingDisk from a dict
existing_disk_from_dict = ExistingDisk.from_dict(existing_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


