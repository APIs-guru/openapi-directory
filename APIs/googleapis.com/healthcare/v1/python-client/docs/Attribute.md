# Attribute

An attribute value for a Consent or User data mapping. Each Attribute must have a corresponding AttributeDefinition in the consent store that defines the default and allowed values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_definition_id** | **str** | Indicates the name of an attribute defined in the consent store. | [optional] 
**values** | **List[str]** | Required. The value of the attribute. Must be an acceptable value as defined in the consent store. For example, if the consent store defines \&quot;data type\&quot; with acceptable values \&quot;questionnaire\&quot; and \&quot;step-count\&quot;, when the attribute name is data type, this field must contain one of those values. | [optional] 

## Example

```python
from openapi_client.models.attribute import Attribute

# TODO update the JSON string below
json = "{}"
# create an instance of Attribute from a JSON string
attribute_instance = Attribute.from_json(json)
# print the JSON string representation of the object
print(Attribute.to_json())

# convert the object into a dict
attribute_dict = attribute_instance.to_dict()
# create an instance of Attribute from a dict
attribute_from_dict = Attribute.from_dict(attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


