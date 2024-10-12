# TargetWindow

Target Window.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_html** | **str** | User-entered value. | [optional] 
**target_window_option** | **str** | Type of browser window for which the backup image of the flash creative can be displayed. | [optional] 

## Example

```python
from openapi_client.models.target_window import TargetWindow

# TODO update the JSON string below
json = "{}"
# create an instance of TargetWindow from a JSON string
target_window_instance = TargetWindow.from_json(json)
# print the JSON string representation of the object
print(TargetWindow.to_json())

# convert the object into a dict
target_window_dict = target_window_instance.to_dict()
# create an instance of TargetWindow from a dict
target_window_from_dict = TargetWindow.from_dict(target_window_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


