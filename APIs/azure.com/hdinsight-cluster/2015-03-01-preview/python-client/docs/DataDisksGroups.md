# DataDisksGroups

The data disks groups for the role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_size_gb** | **int** | ReadOnly. The DiskSize in GB. Do not set this value. | [optional] [readonly] 
**disks_per_node** | **int** | The number of disks per node. | [optional] 
**storage_account_type** | **str** | ReadOnly. The storage account type. Do not set this value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_disks_groups import DataDisksGroups

# TODO update the JSON string below
json = "{}"
# create an instance of DataDisksGroups from a JSON string
data_disks_groups_instance = DataDisksGroups.from_json(json)
# print the JSON string representation of the object
print(DataDisksGroups.to_json())

# convert the object into a dict
data_disks_groups_dict = data_disks_groups_instance.to_dict()
# create an instance of DataDisksGroups from a dict
data_disks_groups_from_dict = DataDisksGroups.from_dict(data_disks_groups_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


