# BooleanPropertyOptions

The options for boolean properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator_options** | [**BooleanOperatorOptions**](BooleanOperatorOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.boolean_property_options import BooleanPropertyOptions

# TODO update the JSON string below
json = "{}"
# create an instance of BooleanPropertyOptions from a JSON string
boolean_property_options_instance = BooleanPropertyOptions.from_json(json)
# print the JSON string representation of the object
print(BooleanPropertyOptions.to_json())

# convert the object into a dict
boolean_property_options_dict = boolean_property_options_instance.to_dict()
# create an instance of BooleanPropertyOptions from a dict
boolean_property_options_from_dict = BooleanPropertyOptions.from_dict(boolean_property_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


