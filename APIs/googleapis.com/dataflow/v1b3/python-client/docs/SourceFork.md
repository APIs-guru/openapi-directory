# SourceFork

DEPRECATED in favor of DynamicSourceSplit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | [**SourceSplitShard**](SourceSplitShard.md) |  | [optional] 
**primary_source** | [**DerivedSource**](DerivedSource.md) |  | [optional] 
**residual** | [**SourceSplitShard**](SourceSplitShard.md) |  | [optional] 
**residual_source** | [**DerivedSource**](DerivedSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_fork import SourceFork

# TODO update the JSON string below
json = "{}"
# create an instance of SourceFork from a JSON string
source_fork_instance = SourceFork.from_json(json)
# print the JSON string representation of the object
print(SourceFork.to_json())

# convert the object into a dict
source_fork_dict = source_fork_instance.to_dict()
# create an instance of SourceFork from a dict
source_fork_from_dict = SourceFork.from_dict(source_fork_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


