# BusinessReportResponseObject

Container to hold the details of a report response  The actual report object will depend on the requested report. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**BusinessReportDetailsObject**](BusinessReportDetailsObject.md) |  | [optional] 
**report** | **object** | The requested report object.  This will be one of:   - ReportCreditScore   - ReportCreditReport  | [optional] 

## Example

```python
from openapi_client.models.business_report_response_object import BusinessReportResponseObject

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessReportResponseObject from a JSON string
business_report_response_object_instance = BusinessReportResponseObject.from_json(json)
# print the JSON string representation of the object
print(BusinessReportResponseObject.to_json())

# convert the object into a dict
business_report_response_object_dict = business_report_response_object_instance.to_dict()
# create an instance of BusinessReportResponseObject from a dict
business_report_response_object_from_dict = BusinessReportResponseObject.from_dict(business_report_response_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


