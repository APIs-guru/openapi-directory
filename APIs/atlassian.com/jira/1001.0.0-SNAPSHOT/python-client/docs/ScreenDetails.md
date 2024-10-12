# ScreenDetails

Details of a screen.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the screen. The maximum length is 255 characters. | [optional] 
**name** | **str** | The name of the screen. The name must be unique. The maximum length is 255 characters. | 

## Example

```python
from openapi_client.models.screen_details import ScreenDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ScreenDetails from a JSON string
screen_details_instance = ScreenDetails.from_json(json)
# print the JSON string representation of the object
print(ScreenDetails.to_json())

# convert the object into a dict
screen_details_dict = screen_details_instance.to_dict()
# create an instance of ScreenDetails from a dict
screen_details_from_dict = ScreenDetails.from_dict(screen_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


