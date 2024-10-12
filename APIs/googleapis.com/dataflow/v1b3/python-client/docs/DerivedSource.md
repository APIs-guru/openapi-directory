# DerivedSource

Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**derivation_mode** | **str** | What source to base the produced source on (if any). | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 

## Example

```python
from openapi_client.models.derived_source import DerivedSource

# TODO update the JSON string below
json = "{}"
# create an instance of DerivedSource from a JSON string
derived_source_instance = DerivedSource.from_json(json)
# print the JSON string representation of the object
print(DerivedSource.to_json())

# convert the object into a dict
derived_source_dict = derived_source_instance.to_dict()
# create an instance of DerivedSource from a dict
derived_source_from_dict = DerivedSource.from_dict(derived_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


