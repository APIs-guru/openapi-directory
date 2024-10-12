# WidgetTypeResourceFormat

The WidgetTypeResourceFormat

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WidgetType**](WidgetType.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.widget_type_resource_format import WidgetTypeResourceFormat

# TODO update the JSON string below
json = "{}"
# create an instance of WidgetTypeResourceFormat from a JSON string
widget_type_resource_format_instance = WidgetTypeResourceFormat.from_json(json)
# print the JSON string representation of the object
print(WidgetTypeResourceFormat.to_json())

# convert the object into a dict
widget_type_resource_format_dict = widget_type_resource_format_instance.to_dict()
# create an instance of WidgetTypeResourceFormat from a dict
widget_type_resource_format_from_dict = WidgetTypeResourceFormat.from_dict(widget_type_resource_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


