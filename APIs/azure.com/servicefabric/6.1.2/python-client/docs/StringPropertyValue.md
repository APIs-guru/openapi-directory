# StringPropertyValue

Describes a Service Fabric property value of type String.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | The data of the property value. | 

## Example

```python
from openapi_client.models.string_property_value import StringPropertyValue

# TODO update the JSON string below
json = "{}"
# create an instance of StringPropertyValue from a JSON string
string_property_value_instance = StringPropertyValue.from_json(json)
# print the JSON string representation of the object
print(StringPropertyValue.to_json())

# convert the object into a dict
string_property_value_dict = string_property_value_instance.to_dict()
# create an instance of StringPropertyValue from a dict
string_property_value_from_dict = StringPropertyValue.from_dict(string_property_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


