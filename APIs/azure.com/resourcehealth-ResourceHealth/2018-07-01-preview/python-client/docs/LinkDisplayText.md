# LinkDisplayText

Display text of link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_value** | **str** | Localized display text of link. | [optional] 
**value** | **str** | Display text of link. | [optional] 

## Example

```python
from openapi_client.models.link_display_text import LinkDisplayText

# TODO update the JSON string below
json = "{}"
# create an instance of LinkDisplayText from a JSON string
link_display_text_instance = LinkDisplayText.from_json(json)
# print the JSON string representation of the object
print(LinkDisplayText.to_json())

# convert the object into a dict
link_display_text_dict = link_display_text_instance.to_dict()
# create an instance of LinkDisplayText from a dict
link_display_text_from_dict = LinkDisplayText.from_dict(link_display_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


