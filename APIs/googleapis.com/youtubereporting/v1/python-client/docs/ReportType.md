# ReportType

A report type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deprecate_time** | **str** | The date/time when this report type was/will be deprecated. | [optional] 
**id** | **str** | The ID of the report type (max. 100 characters). | [optional] 
**name** | **str** | The name of the report type (max. 100 characters). | [optional] 
**system_managed** | **bool** | True if this a system-managed report type; otherwise false. Reporting jobs for system-managed report types are created automatically and can thus not be used in the &#x60;CreateJob&#x60; method. | [optional] 

## Example

```python
from openapi_client.models.report_type import ReportType

# TODO update the JSON string below
json = "{}"
# create an instance of ReportType from a JSON string
report_type_instance = ReportType.from_json(json)
# print the JSON string representation of the object
print(ReportType.to_json())

# convert the object into a dict
report_type_dict = report_type_instance.to_dict()
# create an instance of ReportType from a dict
report_type_from_dict = ReportType.from_dict(report_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


