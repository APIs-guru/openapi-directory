# UIElementTooDeep

A warning that the screen hierarchy is deeper than the recommended threshold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** | The depth of the screen element | [optional] 
**screen_id** | **str** | The screen id of the element | [optional] 
**screen_state_id** | **str** | The screen state id of the element | [optional] 

## Example

```python
from openapi_client.models.ui_element_too_deep import UIElementTooDeep

# TODO update the JSON string below
json = "{}"
# create an instance of UIElementTooDeep from a JSON string
ui_element_too_deep_instance = UIElementTooDeep.from_json(json)
# print the JSON string representation of the object
print(UIElementTooDeep.to_json())

# convert the object into a dict
ui_element_too_deep_dict = ui_element_too_deep_instance.to_dict()
# create an instance of UIElementTooDeep from a dict
ui_element_too_deep_from_dict = UIElementTooDeep.from_dict(ui_element_too_deep_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


