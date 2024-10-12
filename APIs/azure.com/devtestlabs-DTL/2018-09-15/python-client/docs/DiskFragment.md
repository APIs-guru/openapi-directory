# DiskFragment

A Disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DiskPropertiesFragment**](DiskPropertiesFragment.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.disk_fragment import DiskFragment

# TODO update the JSON string below
json = "{}"
# create an instance of DiskFragment from a JSON string
disk_fragment_instance = DiskFragment.from_json(json)
# print the JSON string representation of the object
print(DiskFragment.to_json())

# convert the object into a dict
disk_fragment_dict = disk_fragment_instance.to_dict()
# create an instance of DiskFragment from a dict
disk_fragment_from_dict = DiskFragment.from_dict(disk_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


