# ScreenableTab

A screen tab.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the screen tab. | [optional] [readonly] 
**name** | **str** | The name of the screen tab. The maximum length is 255 characters. | 

## Example

```python
from openapi_client.models.screenable_tab import ScreenableTab

# TODO update the JSON string below
json = "{}"
# create an instance of ScreenableTab from a JSON string
screenable_tab_instance = ScreenableTab.from_json(json)
# print the JSON string representation of the object
print(ScreenableTab.to_json())

# convert the object into a dict
screenable_tab_dict = screenable_tab_instance.to_dict()
# create an instance of ScreenableTab from a dict
screenable_tab_from_dict = ScreenableTab.from_dict(screenable_tab_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


