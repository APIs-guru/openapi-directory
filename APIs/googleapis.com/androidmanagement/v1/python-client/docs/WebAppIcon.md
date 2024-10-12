# WebAppIcon

An icon for a web app. Supported formats are: png, jpg and webp.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_data** | **str** | The actual bytes of the image in a base64url encoded string (c.f. RFC4648, section 5 \&quot;Base 64 Encoding with URL and Filename Safe Alphabet\&quot;). - The image type can be png or jpg. - The image should ideally be square. - The image should ideally have a size of 512x512.  | [optional] 

## Example

```python
from openapi_client.models.web_app_icon import WebAppIcon

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppIcon from a JSON string
web_app_icon_instance = WebAppIcon.from_json(json)
# print the JSON string representation of the object
print(WebAppIcon.to_json())

# convert the object into a dict
web_app_icon_dict = web_app_icon_instance.to_dict()
# create an instance of WebAppIcon from a dict
web_app_icon_from_dict = WebAppIcon.from_dict(web_app_icon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


