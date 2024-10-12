# ArrayValue

An array value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**List[Value]**](Value.md) | Values in the array. | [optional] 

## Example

```python
from openapi_client.models.array_value import ArrayValue

# TODO update the JSON string below
json = "{}"
# create an instance of ArrayValue from a JSON string
array_value_instance = ArrayValue.from_json(json)
# print the JSON string representation of the object
print(ArrayValue.to_json())

# convert the object into a dict
array_value_dict = array_value_instance.to_dict()
# create an instance of ArrayValue from a dict
array_value_from_dict = ArrayValue.from_dict(array_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


