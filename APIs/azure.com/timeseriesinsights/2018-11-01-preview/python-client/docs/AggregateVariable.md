# AggregateVariable

Aggregate variable represents any aggregation calculation. Aggregate Variables does not support interpolation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | [**Tsx**](Tsx.md) |  | [optional] 

## Example

```python
from openapi_client.models.aggregate_variable import AggregateVariable

# TODO update the JSON string below
json = "{}"
# create an instance of AggregateVariable from a JSON string
aggregate_variable_instance = AggregateVariable.from_json(json)
# print the JSON string representation of the object
print(AggregateVariable.to_json())

# convert the object into a dict
aggregate_variable_dict = aggregate_variable_instance.to_dict()
# create an instance of AggregateVariable from a dict
aggregate_variable_from_dict = AggregateVariable.from_dict(aggregate_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


