# PropertyUpdateRequestProperties

Property Contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters. | [optional] 
**value** | **str** | Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace. | [optional] 

## Example

```python
from openapi_client.models.property_update_request_properties import PropertyUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyUpdateRequestProperties from a JSON string
property_update_request_properties_instance = PropertyUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(PropertyUpdateRequestProperties.to_json())

# convert the object into a dict
property_update_request_properties_dict = property_update_request_properties_instance.to_dict()
# create an instance of PropertyUpdateRequestProperties from a dict
property_update_request_properties_from_dict = PropertyUpdateRequestProperties.from_dict(property_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


