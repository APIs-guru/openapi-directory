# WebImage

Metadata for online images.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **float** | (Deprecated) Overall relevancy score for the image. | [optional] 
**url** | **str** | The result image URL. | [optional] 

## Example

```python
from openapi_client.models.web_image import WebImage

# TODO update the JSON string below
json = "{}"
# create an instance of WebImage from a JSON string
web_image_instance = WebImage.from_json(json)
# print the JSON string representation of the object
print(WebImage.to_json())

# convert the object into a dict
web_image_dict = web_image_instance.to_dict()
# create an instance of WebImage from a dict
web_image_from_dict = WebImage.from_dict(web_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


