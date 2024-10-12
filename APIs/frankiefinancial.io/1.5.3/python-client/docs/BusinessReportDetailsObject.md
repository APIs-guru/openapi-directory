# BusinessReportDetailsObject

The metadata details of the report generated . 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_date_time** | **datetime** | The ISO UTC date and time the report was generated  | [optional] 
**report_id** | **str** | If the report provider generated an ID or recipt number for the report, it goes here | [optional] 
**report_name** | **str** | The name of the requested report | [optional] 
**report_provider** | **str** | The name of the service provider that generated the report.  | [optional] 
**report_run** | **bool** | Whether the report was successfully run or not  | [optional] 
**report_status** | **str** | Any details of what is happening with the report of not run.  Will be one of:   - OK  (the report was run)   - LATER  (the report will be sent later as a response notification)   - An error message as to why the report did not work  | [optional] 

## Example

```python
from openapi_client.models.business_report_details_object import BusinessReportDetailsObject

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessReportDetailsObject from a JSON string
business_report_details_object_instance = BusinessReportDetailsObject.from_json(json)
# print the JSON string representation of the object
print(BusinessReportDetailsObject.to_json())

# convert the object into a dict
business_report_details_object_dict = business_report_details_object_instance.to_dict()
# create an instance of BusinessReportDetailsObject from a dict
business_report_details_object_from_dict = BusinessReportDetailsObject.from_dict(business_report_details_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


