# TextLink

Link for text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_text** | **str** | Required. Display text for the URI. | [optional] 
**uri** | **str** | Required. The URI. | [optional] 

## Example

```python
from openapi_client.models.text_link import TextLink

# TODO update the JSON string below
json = "{}"
# create an instance of TextLink from a JSON string
text_link_instance = TextLink.from_json(json)
# print the JSON string representation of the object
print(TextLink.to_json())

# convert the object into a dict
text_link_dict = text_link_instance.to_dict()
# create an instance of TextLink from a dict
text_link_from_dict = TextLink.from_dict(text_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


