# SourceSplitRequest

Represents the operation to split a high-level Source specification into bundles (parts for parallel processing). At a high level, splitting of a source into bundles happens as follows: SourceSplitRequest is applied to the source. If it returns SOURCE_SPLIT_OUTCOME_USE_CURRENT, no further splitting happens and the source is used \"as is\". Otherwise, splitting is applied recursively to each produced DerivedSource. As an optimization, for any Source, if its does_not_need_splitting is true, the framework assumes that splitting this source would return SOURCE_SPLIT_OUTCOME_USE_CURRENT, and doesn't initiate a SourceSplitRequest. This applies both to the initial source being split and to bundles produced from it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | [**SourceSplitOptions**](SourceSplitOptions.md) |  | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_split_request import SourceSplitRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SourceSplitRequest from a JSON string
source_split_request_instance = SourceSplitRequest.from_json(json)
# print the JSON string representation of the object
print(SourceSplitRequest.to_json())

# convert the object into a dict
source_split_request_dict = source_split_request_instance.to_dict()
# create an instance of SourceSplitRequest from a dict
source_split_request_from_dict = SourceSplitRequest.from_dict(source_split_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


