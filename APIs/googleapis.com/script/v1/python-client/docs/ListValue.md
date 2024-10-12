# ListValue

`ListValue` is a wrapper around a repeated field of values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**List[Value]**](Value.md) | Repeated field of dynamically typed values. | [optional] 

## Example

```python
from openapi_client.models.list_value import ListValue

# TODO update the JSON string below
json = "{}"
# create an instance of ListValue from a JSON string
list_value_instance = ListValue.from_json(json)
# print the JSON string representation of the object
print(ListValue.to_json())

# convert the object into a dict
list_value_dict = list_value_instance.to_dict()
# create an instance of ListValue from a dict
list_value_from_dict = ListValue.from_dict(list_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


