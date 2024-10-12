# NamedValueCreateOrUpdateRequestProperties

NamedValue Contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters. | 
**value** | **str** | Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on &#39;GET&#39; operations! Use &#39;/listSecrets&#39; POST request to get the value. | 

## Example

```python
from openapi_client.models.named_value_create_or_update_request_properties import NamedValueCreateOrUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NamedValueCreateOrUpdateRequestProperties from a JSON string
named_value_create_or_update_request_properties_instance = NamedValueCreateOrUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(NamedValueCreateOrUpdateRequestProperties.to_json())

# convert the object into a dict
named_value_create_or_update_request_properties_dict = named_value_create_or_update_request_properties_instance.to_dict()
# create an instance of NamedValueCreateOrUpdateRequestProperties from a dict
named_value_create_or_update_request_properties_from_dict = NamedValueCreateOrUpdateRequestProperties.from_dict(named_value_create_or_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


