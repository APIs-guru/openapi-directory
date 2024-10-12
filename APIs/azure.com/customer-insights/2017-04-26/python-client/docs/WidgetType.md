# WidgetType

Definition of WidgetType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed** | **datetime** | Date time when widget type was last modified. | [optional] [readonly] 
**created** | **datetime** | Date time when widget type was created. | [optional] [readonly] 
**definition** | **str** | Definition for widget type. | 
**description** | **str** | Description for widget type. | [optional] 
**display_name** | **Dict[str, str]** | Localized display name for the widget type. | [optional] 
**image_url** | **str** | The image URL. | [optional] 
**tenant_id** | **str** | The hub name. | [optional] [readonly] 
**widget_type_name** | **str** | Name of the widget type. | [optional] [readonly] 
**widget_version** | **str** | The widget version. | [optional] 

## Example

```python
from openapi_client.models.widget_type import WidgetType

# TODO update the JSON string below
json = "{}"
# create an instance of WidgetType from a JSON string
widget_type_instance = WidgetType.from_json(json)
# print the JSON string representation of the object
print(WidgetType.to_json())

# convert the object into a dict
widget_type_dict = widget_type_instance.to_dict()
# create an instance of WidgetType from a dict
widget_type_from_dict = WidgetType.from_dict(widget_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


