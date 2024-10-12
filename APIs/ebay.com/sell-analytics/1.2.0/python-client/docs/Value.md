# Value

A complex type that contains a value, plus the veracity of that value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicable** | **bool** | If set to true, this flag indicates the value in the value field is valid as computed. A value of false indicates one or more of the values used to calculate the value was invalid. The occurrence of this is a rare, however consider this case: suppose a buyer navigates to a View Item page at 11:59 pm (the end of the day) and purchases the item at 12:05am the next day. In this case, the item would have been purchased with 0 views for the day. | [optional] 
**value** | **object** | The value of the report data. | [optional] 

## Example

```python
from openapi_client.models.value import Value

# TODO update the JSON string below
json = "{}"
# create an instance of Value from a JSON string
value_instance = Value.from_json(json)
# print the JSON string representation of the object
print(Value.to_json())

# convert the object into a dict
value_dict = value_instance.to_dict()
# create an instance of Value from a dict
value_from_dict = Value.from_dict(value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


