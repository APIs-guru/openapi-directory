# PartitionList

The list of the partition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** |  | [optional] 
**items** | [**List[Partition]**](Partition.md) |  | [optional] 

## Example

```python
from openapi_client.models.partition_list import PartitionList

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionList from a JSON string
partition_list_instance = PartitionList.from_json(json)
# print the JSON string representation of the object
print(PartitionList.to_json())

# convert the object into a dict
partition_list_dict = partition_list_instance.to_dict()
# create an instance of PartitionList from a dict
partition_list_from_dict = PartitionList.from_dict(partition_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


