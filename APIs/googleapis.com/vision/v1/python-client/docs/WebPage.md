# WebPage

Metadata for web pages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_matching_images** | [**List[WebImage]**](WebImage.md) | Fully matching images on the page. Can include resized copies of the query image. | [optional] 
**page_title** | **str** | Title for the web page, may contain HTML markups. | [optional] 
**partial_matching_images** | [**List[WebImage]**](WebImage.md) | Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. | [optional] 
**score** | **float** | (Deprecated) Overall relevancy score for the web page. | [optional] 
**url** | **str** | The result web page URL. | [optional] 

## Example

```python
from openapi_client.models.web_page import WebPage

# TODO update the JSON string below
json = "{}"
# create an instance of WebPage from a JSON string
web_page_instance = WebPage.from_json(json)
# print the JSON string representation of the object
print(WebPage.to_json())

# convert the object into a dict
web_page_dict = web_page_instance.to_dict()
# create an instance of WebPage from a dict
web_page_from_dict = WebPage.from_dict(web_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


