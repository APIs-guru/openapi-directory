# ReferenceEntityAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_extensions** | **List[str]** | Extensions allowed when the attribute type is &#x60;image&#x60; | [optional] 
**code** | **str** | Attribute code | 
**decimals_allowed** | **bool** | Whether decimals are allowed when the attribute type is &#x60;number&#x60; | [optional] [default to False]
**is_required_for_completeness** | **bool** | Whether the attribute should be part of the record&#39;s completeness calculation | [optional] [default to False]
**is_rich_text_editor** | **bool** | Whether the UI should display a rich text editor instead of a simple text area when the attribute type is &#x60;text&#x60; | [optional] 
**is_textarea** | **bool** | Whether the UI should display a text area instead of a simple field when the attribute type is &#x60;text&#x60; | [optional] [default to False]
**labels** | [**GetAssetFamiliesCodeAttributes200ResponseInnerLabels**](GetAssetFamiliesCodeAttributes200ResponseInnerLabels.md) |  | [optional] 
**max_characters** | **int** | Maximum number of characters allowed for the value of the attribute when the attribute type is &#x60;text&#x60; | [optional] 
**max_file_size** | **str** | Max file size in MB when the attribute type is &#x60;image&#x60; | [optional] 
**max_value** | **str** | Maximum value allowed when the attribute type is &#x60;number&#x60; | [optional] 
**min_value** | **str** | Minimum value allowed when the attribute type is &#x60;number&#x60; | [optional] 
**reference_entity_code** | **str** | Code of the linked reference entity when the attribute type is &#x60;reference_entity_single_link&#x60; or &#x60;reference_entity_multiple_links&#x60; | [optional] 
**type** | **str** | Attribute type. See &lt;a href&#x3D;&#39;/concepts/reference-entities.html#reference-entity-attribute&#39;&gt;type&lt;/a&gt; section for more details. | 
**validation_regexp** | **str** | Regexp expression used to validate the attribute value when the attribute type is &#x60;text&#x60; | [optional] 
**validation_rule** | **str** | Validation rule type used to validate the attribute value when the attribute type is &#x60;text&#x60; | [optional] [default to 'none']
**value_per_channel** | **bool** | Whether the attribute is scopable, i.e. can have one value by channel | [optional] [default to False]
**value_per_locale** | **bool** | Whether the attribute is localizable, i.e. can have one value by locale | [optional] [default to False]

## Example

```python
from openapi_client.models.reference_entity_attribute import ReferenceEntityAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceEntityAttribute from a JSON string
reference_entity_attribute_instance = ReferenceEntityAttribute.from_json(json)
# print the JSON string representation of the object
print(ReferenceEntityAttribute.to_json())

# convert the object into a dict
reference_entity_attribute_dict = reference_entity_attribute_instance.to_dict()
# create an instance of ReferenceEntityAttribute from a dict
reference_entity_attribute_from_dict = ReferenceEntityAttribute.from_dict(reference_entity_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


