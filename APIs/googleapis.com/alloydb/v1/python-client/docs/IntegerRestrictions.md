# IntegerRestrictions

Restrictions on INTEGER type values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_value** | **str** | The maximum value that can be specified, if applicable. | [optional] 
**min_value** | **str** | The minimum value that can be specified, if applicable. | [optional] 

## Example

```python
from openapi_client.models.integer_restrictions import IntegerRestrictions

# TODO update the JSON string below
json = "{}"
# create an instance of IntegerRestrictions from a JSON string
integer_restrictions_instance = IntegerRestrictions.from_json(json)
# print the JSON string representation of the object
print(IntegerRestrictions.to_json())

# convert the object into a dict
integer_restrictions_dict = integer_restrictions_instance.to_dict()
# create an instance of IntegerRestrictions from a dict
integer_restrictions_from_dict = IntegerRestrictions.from_dict(integer_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


