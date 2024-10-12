# PartitionResponse

The response for PartitionQuery or PartitionRead

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partitions** | [**List[Partition]**](Partition.md) | Partitions created by this request. | [optional] 
**transaction** | [**Transaction**](Transaction.md) |  | [optional] 

## Example

```python
from openapi_client.models.partition_response import PartitionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionResponse from a JSON string
partition_response_instance = PartitionResponse.from_json(json)
# print the JSON string representation of the object
print(PartitionResponse.to_json())

# convert the object into a dict
partition_response_dict = partition_response_instance.to_dict()
# create an instance of PartitionResponse from a dict
partition_response_from_dict = PartitionResponse.from_dict(partition_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


