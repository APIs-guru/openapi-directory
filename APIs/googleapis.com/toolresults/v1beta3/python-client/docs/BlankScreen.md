# BlankScreen

A warning that Robo encountered a screen that was mostly blank; this may indicate a problem with the app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**screen_id** | **str** | The screen id of the element | [optional] 

## Example

```python
from openapi_client.models.blank_screen import BlankScreen

# TODO update the JSON string below
json = "{}"
# create an instance of BlankScreen from a JSON string
blank_screen_instance = BlankScreen.from_json(json)
# print the JSON string representation of the object
print(BlankScreen.to_json())

# convert the object into a dict
blank_screen_dict = blank_screen_instance.to_dict()
# create an instance of BlankScreen from a dict
blank_screen_from_dict = BlankScreen.from_dict(blank_screen_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


