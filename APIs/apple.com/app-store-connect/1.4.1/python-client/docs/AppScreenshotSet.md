# AppScreenshotSet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppScreenshotSetAttributes**](AppScreenshotSetAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppScreenshotSetRelationships**](AppScreenshotSetRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_screenshot_set import AppScreenshotSet

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotSet from a JSON string
app_screenshot_set_instance = AppScreenshotSet.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotSet.to_json())

# convert the object into a dict
app_screenshot_set_dict = app_screenshot_set_instance.to_dict()
# create an instance of AppScreenshotSet from a dict
app_screenshot_set_from_dict = AppScreenshotSet.from_dict(app_screenshot_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


