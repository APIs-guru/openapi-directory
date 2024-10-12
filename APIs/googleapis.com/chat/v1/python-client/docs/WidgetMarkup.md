# WidgetMarkup

A widget is a UI element that presents text and images.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buttons** | [**List[Button]**](Button.md) | A list of buttons. Buttons is also &#x60;oneof data&#x60; and only one of these fields should be set. | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**key_value** | [**KeyValue**](KeyValue.md) |  | [optional] 
**text_paragraph** | [**TextParagraph**](TextParagraph.md) |  | [optional] 

## Example

```python
from openapi_client.models.widget_markup import WidgetMarkup

# TODO update the JSON string below
json = "{}"
# create an instance of WidgetMarkup from a JSON string
widget_markup_instance = WidgetMarkup.from_json(json)
# print the JSON string representation of the object
print(WidgetMarkup.to_json())

# convert the object into a dict
widget_markup_dict = widget_markup_instance.to_dict()
# create an instance of WidgetMarkup from a dict
widget_markup_from_dict = WidgetMarkup.from_dict(widget_markup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


