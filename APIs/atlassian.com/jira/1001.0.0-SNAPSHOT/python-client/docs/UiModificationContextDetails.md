# UiModificationContextDetails

The details of a UI modification's context, which define where to activate the UI modification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the UI modification context. | [optional] [readonly] 
**is_available** | **bool** | Whether a context is available. For example, when a project is deleted the context becomes unavailable. | [optional] [readonly] 
**issue_type_id** | **str** | The issue type ID of the context. | 
**project_id** | **str** | The project ID of the context. | 
**view_type** | **str** | The view type of the context. Only &#x60;GIC&#x60; (Global Issue Create) is supported. | 

## Example

```python
from openapi_client.models.ui_modification_context_details import UiModificationContextDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UiModificationContextDetails from a JSON string
ui_modification_context_details_instance = UiModificationContextDetails.from_json(json)
# print the JSON string representation of the object
print(UiModificationContextDetails.to_json())

# convert the object into a dict
ui_modification_context_details_dict = ui_modification_context_details_instance.to_dict()
# create an instance of UiModificationContextDetails from a dict
ui_modification_context_details_from_dict = UiModificationContextDetails.from_dict(ui_modification_context_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


