# SourceSplitResponse

The response to a SourceSplitRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundles** | [**List[DerivedSource]**](DerivedSource.md) | If outcome is SPLITTING_HAPPENED, then this is a list of bundles into which the source was split. Otherwise this field is ignored. This list can be empty, which means the source represents an empty input. | [optional] 
**outcome** | **str** | Indicates whether splitting happened and produced a list of bundles. If this is USE_CURRENT_SOURCE_AS_IS, the current source should be processed \&quot;as is\&quot; without splitting. \&quot;bundles\&quot; is ignored in this case. If this is SPLITTING_HAPPENED, then \&quot;bundles\&quot; contains a list of bundles into which the source was split. | [optional] 
**shards** | [**List[SourceSplitShard]**](SourceSplitShard.md) | DEPRECATED in favor of bundles. | [optional] 

## Example

```python
from openapi_client.models.source_split_response import SourceSplitResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SourceSplitResponse from a JSON string
source_split_response_instance = SourceSplitResponse.from_json(json)
# print the JSON string representation of the object
print(SourceSplitResponse.to_json())

# convert the object into a dict
source_split_response_dict = source_split_response_instance.to_dict()
# create an instance of SourceSplitResponse from a dict
source_split_response_from_dict = SourceSplitResponse.from_dict(source_split_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


