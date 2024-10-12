# DynamicSourceSplit

When a task splits using WorkItemStatus.dynamic_source_split, this message describes the two parts of the split relative to the description of the current task's input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | [**DerivedSource**](DerivedSource.md) |  | [optional] 
**residual** | [**DerivedSource**](DerivedSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.dynamic_source_split import DynamicSourceSplit

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicSourceSplit from a JSON string
dynamic_source_split_instance = DynamicSourceSplit.from_json(json)
# print the JSON string representation of the object
print(DynamicSourceSplit.to_json())

# convert the object into a dict
dynamic_source_split_dict = dynamic_source_split_instance.to_dict()
# create an instance of DynamicSourceSplit from a dict
dynamic_source_split_from_dict = DynamicSourceSplit.from_dict(dynamic_source_split_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


