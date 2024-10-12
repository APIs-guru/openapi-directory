# WidgetTypeListResult

The response of list widget type operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] 
**value** | [**List[WidgetTypeResourceFormat]**](WidgetTypeResourceFormat.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.widget_type_list_result import WidgetTypeListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WidgetTypeListResult from a JSON string
widget_type_list_result_instance = WidgetTypeListResult.from_json(json)
# print the JSON string representation of the object
print(WidgetTypeListResult.to_json())

# convert the object into a dict
widget_type_list_result_dict = widget_type_list_result_instance.to_dict()
# create an instance of WidgetTypeListResult from a dict
widget_type_list_result_from_dict = WidgetTypeListResult.from_dict(widget_type_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


