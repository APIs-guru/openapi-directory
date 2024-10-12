# BusinessReportResponseDetails

Results of the entity create or update along with the results of the requested reports. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_id** | **str** | Unique identifier for the report operation.  | [optional] 
**entity** | [**EntityObject**](EntityObject.md) |  | [optional] 
**reports** | [**List[BusinessReportResponseObject]**](BusinessReportResponseObject.md) | The collection of requested business reports.  | [optional] 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | [optional] 

## Example

```python
from openapi_client.models.business_report_response_details import BusinessReportResponseDetails

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessReportResponseDetails from a JSON string
business_report_response_details_instance = BusinessReportResponseDetails.from_json(json)
# print the JSON string representation of the object
print(BusinessReportResponseDetails.to_json())

# convert the object into a dict
business_report_response_details_dict = business_report_response_details_instance.to_dict()
# create an instance of BusinessReportResponseDetails from a dict
business_report_response_details_from_dict = BusinessReportResponseDetails.from_dict(business_report_response_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


