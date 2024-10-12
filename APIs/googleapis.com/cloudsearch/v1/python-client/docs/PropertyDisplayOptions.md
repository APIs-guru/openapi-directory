# PropertyDisplayOptions

The display options for a property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_label** | **str** | The user friendly label for the property that is used if the property is specified to be displayed in ObjectDisplayOptions. If provided, the display label is shown in front of the property values when the property is part of the object display options. For example, if the property value is &#39;1&#39;, the value by itself may not be useful context for the user. If the display name given was &#39;priority&#39;, then the user sees &#39;priority : 1&#39; in the search results which provides clear context to search users. This is OPTIONAL; if not given, only the property values are displayed. The maximum length is 64 characters. | [optional] 

## Example

```python
from openapi_client.models.property_display_options import PropertyDisplayOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyDisplayOptions from a JSON string
property_display_options_instance = PropertyDisplayOptions.from_json(json)
# print the JSON string representation of the object
print(PropertyDisplayOptions.to_json())

# convert the object into a dict
property_display_options_dict = property_display_options_instance.to_dict()
# create an instance of PropertyDisplayOptions from a dict
property_display_options_from_dict = PropertyDisplayOptions.from_dict(property_display_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


