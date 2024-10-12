# UpdatedWidget

The response of the updated widget. Used to provide autocomplete options for a widget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suggestions** | [**SelectionItems**](SelectionItems.md) |  | [optional] 
**widget** | **str** | The ID of the updated widget. The ID must match the one for the widget that triggered the update request. | [optional] 

## Example

```python
from openapi_client.models.updated_widget import UpdatedWidget

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatedWidget from a JSON string
updated_widget_instance = UpdatedWidget.from_json(json)
# print the JSON string representation of the object
print(UpdatedWidget.to_json())

# convert the object into a dict
updated_widget_dict = updated_widget_instance.to_dict()
# create an instance of UpdatedWidget from a dict
updated_widget_from_dict = UpdatedWidget.from_dict(updated_widget_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


