# SourceSplitShard

DEPRECATED in favor of DerivedSource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**derivation_mode** | **str** | DEPRECATED | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_split_shard import SourceSplitShard

# TODO update the JSON string below
json = "{}"
# create an instance of SourceSplitShard from a JSON string
source_split_shard_instance = SourceSplitShard.from_json(json)
# print the JSON string representation of the object
print(SourceSplitShard.to_json())

# convert the object into a dict
source_split_shard_dict = source_split_shard_instance.to_dict()
# create an instance of SourceSplitShard from a dict
source_split_shard_from_dict = SourceSplitShard.from_dict(source_split_shard_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


