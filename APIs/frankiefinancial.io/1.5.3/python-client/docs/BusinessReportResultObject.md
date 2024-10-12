# BusinessReportResultObject

The positive result of a report generation request if any. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **str** |  | [optional] 
**location** | **str** |  | [optional] 
**scan_doc_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.business_report_result_object import BusinessReportResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessReportResultObject from a JSON string
business_report_result_object_instance = BusinessReportResultObject.from_json(json)
# print the JSON string representation of the object
print(BusinessReportResultObject.to_json())

# convert the object into a dict
business_report_result_object_dict = business_report_result_object_instance.to_dict()
# create an instance of BusinessReportResultObject from a dict
business_report_result_object_from_dict = BusinessReportResultObject.from_dict(business_report_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


