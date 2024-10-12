# NamedStyle

A named style. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from this named style when they have the same named style type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**named_style_type** | **str** | The type of this named style. | [optional] 
**paragraph_style** | [**ParagraphStyle**](ParagraphStyle.md) |  | [optional] 
**text_style** | [**TextStyle**](TextStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.named_style import NamedStyle

# TODO update the JSON string below
json = "{}"
# create an instance of NamedStyle from a JSON string
named_style_instance = NamedStyle.from_json(json)
# print the JSON string representation of the object
print(NamedStyle.to_json())

# convert the object into a dict
named_style_dict = named_style_instance.to_dict()
# create an instance of NamedStyle from a dict
named_style_from_dict = NamedStyle.from_dict(named_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


