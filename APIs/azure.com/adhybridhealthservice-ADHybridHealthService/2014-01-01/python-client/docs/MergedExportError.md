# MergedExportError

The merged export error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** | The attribute name. | [optional] 
**attribute_value** | **str** | The attribute value. | [optional] 
**created_date** | **datetime** | The date and time, in UTC, when the error was created. | [optional] 
**cs_object_id** | **str** |  the cs object Id. | [optional] 
**dn** | **str** | the DN of the object. | [optional] 
**existing_object** | [**AssociatedObject**](AssociatedObject.md) |  | [optional] 
**export_error_status** | **int** | The export error status. | [optional] 
**id** | **str** | The error Id. | [optional] 
**incoming_object** | [**AssociatedObject**](AssociatedObject.md) |  | [optional] 
**incoming_object_display_name** | **str** | The incoming object display name. | [optional] 
**incoming_object_type** | **str** | The incoming object type. | [optional] 
**merged_entity_id** | **str** | The merged entity Id. | [optional] 
**modified_or_removed_attribute_value** | **str** | The modified or removed attribute value. | [optional] 
**run_step_result_id** | **str** | The run step result Id. | [optional] 
**sam_account_name** | **str** | The sam account name. | [optional] 
**server_error_detail** | **str** | The server error details. | [optional] 
**service_id** | **str** | The service Id. | [optional] 
**service_member_id** | **str** | The server Id. | [optional] 
**time_first_occurred** | **datetime** | The time when the error first occurred. | [optional] 
**time_occurred** | **datetime** | The date and time when the error occurred. | [optional] 
**type** | **str** | The type of the error. | [optional] 
**user_principal_name** | **str** | The user principal name | [optional] 

## Example

```python
from openapi_client.models.merged_export_error import MergedExportError

# TODO update the JSON string below
json = "{}"
# create an instance of MergedExportError from a JSON string
merged_export_error_instance = MergedExportError.from_json(json)
# print the JSON string representation of the object
print(MergedExportError.to_json())

# convert the object into a dict
merged_export_error_dict = merged_export_error_instance.to_dict()
# create an instance of MergedExportError from a dict
merged_export_error_from_dict = MergedExportError.from_dict(merged_export_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


