# Partition

Describes the partition in Synchronization service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dn** | **str** | The distinguished name for the partition. | [optional] 
**enabled** | **bool** | Indicates if the partition object is selected or not. | [optional] 
**id** | **str** | The partition Id. | [optional] 
**is_domain** | **bool** | Indicates if the partition is a domain or not. | [optional] 
**name** | **str** | The name of the partition. | [optional] 
**partition_scope** | [**PartitionScope**](PartitionScope.md) |  | [optional] 
**time_created** | **datetime** | The date and time when the partition is created. | [optional] 
**time_last_modified** | **datetime** | The time and date when the partition was last modified. | [optional] 
**type** | **str** | The partition type. | [optional] 

## Example

```python
from openapi_client.models.partition import Partition

# TODO update the JSON string below
json = "{}"
# create an instance of Partition from a JSON string
partition_instance = Partition.from_json(json)
# print the JSON string representation of the object
print(Partition.to_json())

# convert the object into a dict
partition_dict = partition_instance.to_dict()
# create an instance of Partition from a dict
partition_from_dict = Partition.from_dict(partition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


