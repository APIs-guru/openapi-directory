# Text

A widget that displays textual content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The text content to be displayed. | [optional] 
**format** | **str** | How the text content is formatted. | [optional] 
**style** | [**TextStyle**](TextStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.text import Text

# TODO update the JSON string below
json = "{}"
# create an instance of Text from a JSON string
text_instance = Text.from_json(json)
# print the JSON string representation of the object
print(Text.to_json())

# convert the object into a dict
text_dict = text_instance.to_dict()
# create an instance of Text from a dict
text_from_dict = Text.from_dict(text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


