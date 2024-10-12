# BackgroundColoredText


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | **str** | [Optional] Color of the background. The text color can change depending on the selected background color, and the client does not have control over this. If missing, the background will be WHITE. | [optional] 
**text** | **str** | [Required] The text to display. | [optional] 

## Example

```python
from openapi_client.models.background_colored_text import BackgroundColoredText

# TODO update the JSON string below
json = "{}"
# create an instance of BackgroundColoredText from a JSON string
background_colored_text_instance = BackgroundColoredText.from_json(json)
# print the JSON string representation of the object
print(BackgroundColoredText.to_json())

# convert the object into a dict
background_colored_text_dict = background_colored_text_instance.to_dict()
# create an instance of BackgroundColoredText from a dict
background_colored_text_from_dict = BackgroundColoredText.from_dict(background_colored_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


