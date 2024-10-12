# ReportList

Represents the list of reports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The eTag of this response for caching purposes. | [optional] 
**items** | [**List[Report]**](Report.md) | The reports returned in this response. | [optional] 
**kind** | **str** | The kind of list this is, in this case dfareporting#reportList. | [optional] 
**next_page_token** | **str** | Continuation token used to page through reports. To retrieve the next page of results, set the next request&#39;s \&quot;pageToken\&quot; to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. | [optional] 

## Example

```python
from openapi_client.models.report_list import ReportList

# TODO update the JSON string below
json = "{}"
# create an instance of ReportList from a JSON string
report_list_instance = ReportList.from_json(json)
# print the JSON string representation of the object
print(ReportList.to_json())

# convert the object into a dict
report_list_dict = report_list_instance.to_dict()
# create an instance of ReportList from a dict
report_list_from_dict = ReportList.from_dict(report_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


