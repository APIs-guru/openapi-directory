# PagespeedApiImageV4


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | Image data base64 encoded. | [optional] 
**height** | **int** | Height of screenshot in pixels. | [optional] 
**key** | **str** | Unique string key, if any, identifying this image. | [optional] 
**mime_type** | **str** | Mime type of image data (e.g. \&quot;image/jpeg\&quot;). | [optional] 
**page_rect** | [**PagespeedApiFormatStringV4ArgsInnerRectsInner**](PagespeedApiFormatStringV4ArgsInnerRectsInner.md) |  | [optional] 
**width** | **int** | Width of screenshot in pixels. | [optional] 

## Example

```python
from openapi_client.models.pagespeed_api_image_v4 import PagespeedApiImageV4

# TODO update the JSON string below
json = "{}"
# create an instance of PagespeedApiImageV4 from a JSON string
pagespeed_api_image_v4_instance = PagespeedApiImageV4.from_json(json)
# print the JSON string representation of the object
print(PagespeedApiImageV4.to_json())

# convert the object into a dict
pagespeed_api_image_v4_dict = pagespeed_api_image_v4_instance.to_dict()
# create an instance of PagespeedApiImageV4 from a dict
pagespeed_api_image_v4_from_dict = PagespeedApiImageV4.from_dict(pagespeed_api_image_v4_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


