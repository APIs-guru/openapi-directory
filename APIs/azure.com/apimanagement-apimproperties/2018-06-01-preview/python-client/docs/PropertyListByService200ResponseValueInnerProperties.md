# PropertyListByService200ResponseValueInnerProperties

Property Contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters. | 
**value** | **str** | Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace. | 

## Example

```python
from openapi_client.models.property_list_by_service200_response_value_inner_properties import PropertyListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyListByService200ResponseValueInnerProperties from a JSON string
property_list_by_service200_response_value_inner_properties_instance = PropertyListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(PropertyListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
property_list_by_service200_response_value_inner_properties_dict = property_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of PropertyListByService200ResponseValueInnerProperties from a dict
property_list_by_service200_response_value_inner_properties_from_dict = PropertyListByService200ResponseValueInnerProperties.from_dict(property_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


