# ResultScreenshot

Base64-encoded screenshot of the page that was analyzed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | Image data base64 encoded. | [optional] 
**height** | **int** | Height of screenshot in pixels. | [optional] 
**mime_type** | **str** | Mime type of image data. E.g. \&quot;image/jpeg\&quot;. | [optional] 
**width** | **int** | Width of screenshot in pixels. | [optional] 

## Example

```python
from openapi_client.models.result_screenshot import ResultScreenshot

# TODO update the JSON string below
json = "{}"
# create an instance of ResultScreenshot from a JSON string
result_screenshot_instance = ResultScreenshot.from_json(json)
# print the JSON string representation of the object
print(ResultScreenshot.to_json())

# convert the object into a dict
result_screenshot_dict = result_screenshot_instance.to_dict()
# create an instance of ResultScreenshot from a dict
result_screenshot_from_dict = ResultScreenshot.from_dict(result_screenshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


