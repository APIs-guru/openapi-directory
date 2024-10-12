# WebfontList

Response containing the list of fonts currently served by the Google Fonts API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Webfont]**](Webfont.md) | The list of fonts currently served by the Google Fonts API. | [optional] 
**kind** | **str** | This kind represents a list of webfont objects in the webfonts service. | [optional] 

## Example

```python
from openapi_client.models.webfont_list import WebfontList

# TODO update the JSON string below
json = "{}"
# create an instance of WebfontList from a JSON string
webfont_list_instance = WebfontList.from_json(json)
# print the JSON string representation of the object
print(WebfontList.to_json())

# convert the object into a dict
webfont_list_dict = webfont_list_instance.to_dict()
# create an instance of WebfontList from a dict
webfont_list_from_dict = WebfontList.from_dict(webfont_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


