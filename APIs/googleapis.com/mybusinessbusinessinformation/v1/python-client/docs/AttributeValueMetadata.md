# AttributeValueMetadata

Metadata for supported attribute values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name for this value, localized where available; otherwise, in English. The value display name is intended to be used in context with the attribute display name. For example, for a \&quot;WiFi\&quot; enum attribute, this could contain \&quot;Paid\&quot; to represent paid Wi-Fi. | [optional] 
**value** | **object** | The attribute value. | [optional] 

## Example

```python
from openapi_client.models.attribute_value_metadata import AttributeValueMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeValueMetadata from a JSON string
attribute_value_metadata_instance = AttributeValueMetadata.from_json(json)
# print the JSON string representation of the object
print(AttributeValueMetadata.to_json())

# convert the object into a dict
attribute_value_metadata_dict = attribute_value_metadata_instance.to_dict()
# create an instance of AttributeValueMetadata from a dict
attribute_value_metadata_from_dict = AttributeValueMetadata.from_dict(attribute_value_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


