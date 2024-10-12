# Shard

Output only. Details about the shard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimated_shard_duration** | **str** | Output only. The estimated shard duration based on previous test case timing records, if available. | [optional] [readonly] 
**num_shards** | **int** | Output only. The total number of shards. | [optional] [readonly] 
**shard_index** | **int** | Output only. The index of the shard among all the shards. | [optional] [readonly] 
**test_targets_for_shard** | [**TestTargetsForShard**](TestTargetsForShard.md) |  | [optional] 

## Example

```python
from openapi_client.models.shard import Shard

# TODO update the JSON string below
json = "{}"
# create an instance of Shard from a JSON string
shard_instance = Shard.from_json(json)
# print the JSON string representation of the object
print(Shard.to_json())

# convert the object into a dict
shard_dict = shard_instance.to_dict()
# create an instance of Shard from a dict
shard_from_dict = Shard.from_dict(shard_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


