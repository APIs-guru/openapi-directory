# EndCondition

The condition that a Waiter resource is waiting for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardinality** | [**Cardinality**](Cardinality.md) |  | [optional] 

## Example

```python
from openapi_client.models.end_condition import EndCondition

# TODO update the JSON string below
json = "{}"
# create an instance of EndCondition from a JSON string
end_condition_instance = EndCondition.from_json(json)
# print the JSON string representation of the object
print(EndCondition.to_json())

# convert the object into a dict
end_condition_dict = end_condition_instance.to_dict()
# create an instance of EndCondition from a dict
end_condition_from_dict = EndCondition.from_dict(end_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


