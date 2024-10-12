# UnaryFilter

A filter with a single operand.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | [**FieldReference**](FieldReference.md) |  | [optional] 
**op** | **str** | The unary operator to apply. | [optional] 

## Example

```python
from openapi_client.models.unary_filter import UnaryFilter

# TODO update the JSON string below
json = "{}"
# create an instance of UnaryFilter from a JSON string
unary_filter_instance = UnaryFilter.from_json(json)
# print the JSON string representation of the object
print(UnaryFilter.to_json())

# convert the object into a dict
unary_filter_dict = unary_filter_instance.to_dict()
# create an instance of UnaryFilter from a dict
unary_filter_from_dict = UnaryFilter.from_dict(unary_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


