# NamedValueUpdateRequestProperties

NamedValue Contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters. | [optional] 
**value** | **str** | Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. | [optional] 

## Example

```python
from openapi_client.models.named_value_update_request_properties import NamedValueUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NamedValueUpdateRequestProperties from a JSON string
named_value_update_request_properties_instance = NamedValueUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(NamedValueUpdateRequestProperties.to_json())

# convert the object into a dict
named_value_update_request_properties_dict = named_value_update_request_properties_instance.to_dict()
# create an instance of NamedValueUpdateRequestProperties from a dict
named_value_update_request_properties_from_dict = NamedValueUpdateRequestProperties.from_dict(named_value_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


