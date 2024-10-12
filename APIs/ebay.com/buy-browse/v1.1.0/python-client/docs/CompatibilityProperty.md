# CompatibilityProperty

This container returns the product attribute name/value pairs that are compatible with the keyword. These attributes are submitted in the  <b>compatibility_filter</b> request field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_name** | **str** | The name of the product attribute that as been translated to the language of the site. | [optional] 
**name** | **str** | The name of the product attribute, such as Make, Model, Year, etc. | [optional] 
**value** | **str** | The value for the name attribute, such as BMW, R1200GS, 2011, etc. | [optional] 

## Example

```python
from openapi_client.models.compatibility_property import CompatibilityProperty

# TODO update the JSON string below
json = "{}"
# create an instance of CompatibilityProperty from a JSON string
compatibility_property_instance = CompatibilityProperty.from_json(json)
# print the JSON string representation of the object
print(CompatibilityProperty.to_json())

# convert the object into a dict
compatibility_property_dict = compatibility_property_instance.to_dict()
# create an instance of CompatibilityProperty from a dict
compatibility_property_from_dict = CompatibilityProperty.from_dict(compatibility_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


