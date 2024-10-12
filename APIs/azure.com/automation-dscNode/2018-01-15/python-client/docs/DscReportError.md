# DscReportError

Definition of the dsc node report error type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Gets or sets the error code. | [optional] 
**error_details** | **str** | Gets or sets the error details. | [optional] 
**error_message** | **str** | Gets or sets the error message. | [optional] 
**error_source** | **str** | Gets or sets the source of the error. | [optional] 
**locale** | **str** | Gets or sets the locale of the error. | [optional] 
**resource_id** | **str** | Gets or sets the resource ID which generated the error. | [optional] 

## Example

```python
from openapi_client.models.dsc_report_error import DscReportError

# TODO update the JSON string below
json = "{}"
# create an instance of DscReportError from a JSON string
dsc_report_error_instance = DscReportError.from_json(json)
# print the JSON string representation of the object
print(DscReportError.to_json())

# convert the object into a dict
dsc_report_error_dict = dsc_report_error_instance.to_dict()
# create an instance of DscReportError from a dict
dsc_report_error_from_dict = DscReportError.from_dict(dsc_report_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


