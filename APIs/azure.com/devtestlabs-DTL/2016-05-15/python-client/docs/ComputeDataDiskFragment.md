# ComputeDataDiskFragment

A data disks attached to a virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_size_gi_b** | **int** | Gets data disk size in GiB. | [optional] 
**disk_uri** | **str** | When backed by a blob, the URI of underlying blob. | [optional] 
**managed_disk_id** | **str** | When backed by managed disk, this is the ID of the compute disk resource. | [optional] 
**name** | **str** | Gets data disk name. | [optional] 

## Example

```python
from openapi_client.models.compute_data_disk_fragment import ComputeDataDiskFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeDataDiskFragment from a JSON string
compute_data_disk_fragment_instance = ComputeDataDiskFragment.from_json(json)
# print the JSON string representation of the object
print(ComputeDataDiskFragment.to_json())

# convert the object into a dict
compute_data_disk_fragment_dict = compute_data_disk_fragment_instance.to_dict()
# create an instance of ComputeDataDiskFragment from a dict
compute_data_disk_fragment_from_dict = ComputeDataDiskFragment.from_dict(compute_data_disk_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


