# KeyRangeDataDiskAssignment

Data disk assignment information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_disk** | **str** | The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example \&quot;myproject-1014-104817-4c2-harness-0-disk-1\&quot;. | [optional] 
**end** | **str** | The end (exclusive) of the key range. | [optional] 
**start** | **str** | The start (inclusive) of the key range. | [optional] 

## Example

```python
from openapi_client.models.key_range_data_disk_assignment import KeyRangeDataDiskAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of KeyRangeDataDiskAssignment from a JSON string
key_range_data_disk_assignment_instance = KeyRangeDataDiskAssignment.from_json(json)
# print the JSON string representation of the object
print(KeyRangeDataDiskAssignment.to_json())

# convert the object into a dict
key_range_data_disk_assignment_dict = key_range_data_disk_assignment_instance.to_dict()
# create an instance of KeyRangeDataDiskAssignment from a dict
key_range_data_disk_assignment_from_dict = KeyRangeDataDiskAssignment.from_dict(key_range_data_disk_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


