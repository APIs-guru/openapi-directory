# PagespeedApiImageV2PageRect

The region of the page that is captured by this image, with dimensions measured in CSS pixels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | The height of the rect. | [optional] 
**left** | **int** | The left coordinate of the rect, in page coordinates. | [optional] 
**top** | **int** | The top coordinate of the rect, in page coordinates. | [optional] 
**width** | **int** | The width of the rect. | [optional] 

## Example

```python
from openapi_client.models.pagespeed_api_image_v2_page_rect import PagespeedApiImageV2PageRect

# TODO update the JSON string below
json = "{}"
# create an instance of PagespeedApiImageV2PageRect from a JSON string
pagespeed_api_image_v2_page_rect_instance = PagespeedApiImageV2PageRect.from_json(json)
# print the JSON string representation of the object
print(PagespeedApiImageV2PageRect.to_json())

# convert the object into a dict
pagespeed_api_image_v2_page_rect_dict = pagespeed_api_image_v2_page_rect_instance.to_dict()
# create an instance of PagespeedApiImageV2PageRect from a dict
pagespeed_api_image_v2_page_rect_from_dict = PagespeedApiImageV2PageRect.from_dict(pagespeed_api_image_v2_page_rect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


