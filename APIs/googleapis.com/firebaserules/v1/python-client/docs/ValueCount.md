# ValueCount

Tuple for how many times an Expression was evaluated to a particular ExpressionValue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The amount of times that expression returned. | [optional] 
**value** | **object** | The return value of the expression | [optional] 

## Example

```python
from openapi_client.models.value_count import ValueCount

# TODO update the JSON string below
json = "{}"
# create an instance of ValueCount from a JSON string
value_count_instance = ValueCount.from_json(json)
# print the JSON string representation of the object
print(ValueCount.to_json())

# convert the object into a dict
value_count_dict = value_count_instance.to_dict()
# create an instance of ValueCount from a dict
value_count_from_dict = ValueCount.from_dict(value_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


