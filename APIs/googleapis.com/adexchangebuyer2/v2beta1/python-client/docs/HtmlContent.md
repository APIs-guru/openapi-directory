# HtmlContent

HTML content for a creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | The height of the HTML snippet in pixels. | [optional] 
**snippet** | **str** | The HTML snippet that displays the ad when inserted in the web page. | [optional] 
**width** | **int** | The width of the HTML snippet in pixels. | [optional] 

## Example

```python
from openapi_client.models.html_content import HtmlContent

# TODO update the JSON string below
json = "{}"
# create an instance of HtmlContent from a JSON string
html_content_instance = HtmlContent.from_json(json)
# print the JSON string representation of the object
print(HtmlContent.to_json())

# convert the object into a dict
html_content_dict = html_content_instance.to_dict()
# create an instance of HtmlContent from a dict
html_content_from_dict = HtmlContent.from_dict(html_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


