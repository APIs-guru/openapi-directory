# OverlappingUIElements

A warning that Robo encountered a screen that has overlapping clickable elements; this may indicate a potential UI issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_name** | **List[str]** | Resource names of the overlapping screen elements | [optional] 
**screen_id** | **str** | The screen id of the elements | [optional] 

## Example

```python
from openapi_client.models.overlapping_ui_elements import OverlappingUIElements

# TODO update the JSON string below
json = "{}"
# create an instance of OverlappingUIElements from a JSON string
overlapping_ui_elements_instance = OverlappingUIElements.from_json(json)
# print the JSON string representation of the object
print(OverlappingUIElements.to_json())

# convert the object into a dict
overlapping_ui_elements_dict = overlapping_ui_elements_instance.to_dict()
# create an instance of OverlappingUIElements from a dict
overlapping_ui_elements_from_dict = OverlappingUIElements.from_dict(overlapping_ui_elements_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


