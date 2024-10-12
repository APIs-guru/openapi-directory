# Screen


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_reference** | **str** | File reference of the png file. Required. | [optional] 
**locale** | **str** | Locale of the device that the screenshot was taken on. Required. | [optional] 
**model** | **str** | Model of the device that the screenshot was taken on. Required. | [optional] 
**version** | **str** | OS version of the device that the screenshot was taken on. Required. | [optional] 

## Example

```python
from openapi_client.models.screen import Screen

# TODO update the JSON string below
json = "{}"
# create an instance of Screen from a JSON string
screen_instance = Screen.from_json(json)
# print the JSON string representation of the object
print(Screen.to_json())

# convert the object into a dict
screen_dict = screen_instance.to_dict()
# create an instance of Screen from a dict
screen_from_dict = Screen.from_dict(screen_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


