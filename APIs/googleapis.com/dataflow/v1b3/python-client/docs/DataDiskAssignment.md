# DataDiskAssignment

Data disk assignment for a given VM instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_disks** | **List[str]** | Mounted data disks. The order is important a data disk&#39;s 0-based index in this list defines which persistent directory the disk is mounted to, for example the list of { \&quot;myproject-1014-104817-4c2-harness-0-disk-0\&quot; }, { \&quot;myproject-1014-104817-4c2-harness-0-disk-1\&quot; }. | [optional] 
**vm_instance** | **str** | VM instance name the data disks mounted to, for example \&quot;myproject-1014-104817-4c2-harness-0\&quot;. | [optional] 

## Example

```python
from openapi_client.models.data_disk_assignment import DataDiskAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of DataDiskAssignment from a JSON string
data_disk_assignment_instance = DataDiskAssignment.from_json(json)
# print the JSON string representation of the object
print(DataDiskAssignment.to_json())

# convert the object into a dict
data_disk_assignment_dict = data_disk_assignment_instance.to_dict()
# create an instance of DataDiskAssignment from a dict
data_disk_assignment_from_dict = DataDiskAssignment.from_dict(data_disk_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


