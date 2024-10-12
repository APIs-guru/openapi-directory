# SourceSplitOptions

Hints for splitting a Source into bundles (parts for parallel processing) using SourceSplitRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**desired_bundle_size_bytes** | **str** | The source should be split into a set of bundles where the estimated size of each is approximately this many bytes. | [optional] 
**desired_shard_size_bytes** | **str** | DEPRECATED in favor of desired_bundle_size_bytes. | [optional] 

## Example

```python
from openapi_client.models.source_split_options import SourceSplitOptions

# TODO update the JSON string below
json = "{}"
# create an instance of SourceSplitOptions from a JSON string
source_split_options_instance = SourceSplitOptions.from_json(json)
# print the JSON string representation of the object
print(SourceSplitOptions.to_json())

# convert the object into a dict
source_split_options_dict = source_split_options_instance.to_dict()
# create an instance of SourceSplitOptions from a dict
source_split_options_from_dict = SourceSplitOptions.from_dict(source_split_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


