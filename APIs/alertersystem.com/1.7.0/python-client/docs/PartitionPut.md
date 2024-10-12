# PartitionPut

The Partition resource is a collection of siloed monitor and alert environments in the user account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition_name** | **str** | The name of the partition. Max 255 characters. | 
**partition_notes** | **str** | Notes about the partition. Max 10,000 characters. Formatting using Markdown is allowed. HTML will be removed. | [optional] 

## Example

```python
from openapi_client.models.partition_put import PartitionPut

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionPut from a JSON string
partition_put_instance = PartitionPut.from_json(json)
# print the JSON string representation of the object
print(PartitionPut.to_json())

# convert the object into a dict
partition_put_dict = partition_put_instance.to_dict()
# create an instance of PartitionPut from a dict
partition_put_from_dict = PartitionPut.from_dict(partition_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


