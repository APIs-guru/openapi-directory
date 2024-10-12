# CustomAttributeValue

Additional custom attribute values may be one of these types

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | Represents a boolean value. | [optional] 
**number_value** | **float** | Represents a double value. | [optional] 
**string_value** | **str** | Represents a string value. | [optional] 

## Example

```python
from openapi_client.models.custom_attribute_value import CustomAttributeValue

# TODO update the JSON string below
json = "{}"
# create an instance of CustomAttributeValue from a JSON string
custom_attribute_value_instance = CustomAttributeValue.from_json(json)
# print the JSON string representation of the object
print(CustomAttributeValue.to_json())

# convert the object into a dict
custom_attribute_value_dict = custom_attribute_value_instance.to_dict()
# create an instance of CustomAttributeValue from a dict
custom_attribute_value_from_dict = CustomAttributeValue.from_dict(custom_attribute_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


