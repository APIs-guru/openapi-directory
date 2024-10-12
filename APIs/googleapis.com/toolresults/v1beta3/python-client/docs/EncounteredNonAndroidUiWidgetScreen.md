# EncounteredNonAndroidUiWidgetScreen

Additional details about encountered screens with elements that are not Android UI widgets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distinct_screens** | **int** | Number of encountered distinct screens with non Android UI widgets. | [optional] 
**screen_ids** | **List[str]** | Subset of screens which contain non Android UI widgets. | [optional] 

## Example

```python
from openapi_client.models.encountered_non_android_ui_widget_screen import EncounteredNonAndroidUiWidgetScreen

# TODO update the JSON string below
json = "{}"
# create an instance of EncounteredNonAndroidUiWidgetScreen from a JSON string
encountered_non_android_ui_widget_screen_instance = EncounteredNonAndroidUiWidgetScreen.from_json(json)
# print the JSON string representation of the object
print(EncounteredNonAndroidUiWidgetScreen.to_json())

# convert the object into a dict
encountered_non_android_ui_widget_screen_dict = encountered_non_android_ui_widget_screen_instance.to_dict()
# create an instance of EncounteredNonAndroidUiWidgetScreen from a dict
encountered_non_android_ui_widget_screen_from_dict = EncounteredNonAndroidUiWidgetScreen.from_dict(encountered_non_android_ui_widget_screen_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


