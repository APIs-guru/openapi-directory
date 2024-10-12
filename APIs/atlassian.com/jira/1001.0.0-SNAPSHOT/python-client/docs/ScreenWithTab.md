# ScreenWithTab

A screen with tab details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the screen. | [optional] [readonly] 
**id** | **int** | The ID of the screen. | [optional] [readonly] 
**name** | **str** | The name of the screen. | [optional] [readonly] 
**scope** | [**Scope**](Scope.md) | The scope of the screen. | [optional] 
**tab** | [**ScreenableTab**](ScreenableTab.md) | The tab for the screen. | [optional] 

## Example

```python
from openapi_client.models.screen_with_tab import ScreenWithTab

# TODO update the JSON string below
json = "{}"
# create an instance of ScreenWithTab from a JSON string
screen_with_tab_instance = ScreenWithTab.from_json(json)
# print the JSON string representation of the object
print(ScreenWithTab.to_json())

# convert the object into a dict
screen_with_tab_dict = screen_with_tab_instance.to_dict()
# create an instance of ScreenWithTab from a dict
screen_with_tab_from_dict = ScreenWithTab.from_dict(screen_with_tab_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


