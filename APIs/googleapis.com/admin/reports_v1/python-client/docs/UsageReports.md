# UsageReports


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | The type of API resource. For a usage report, the value is &#x60;admin#reports#usageReports&#x60;. | [optional] [default to 'admin#reports#usageReports']
**next_page_token** | **str** | Token to specify next page. A report with multiple pages has a &#x60;nextPageToken&#x60; property in the response. For your follow-on requests getting all of the report&#39;s pages, enter the &#x60;nextPageToken&#x60; value in the &#x60;pageToken&#x60; query string. | [optional] 
**usage_reports** | [**List[UsageReport]**](UsageReport.md) | Various application parameter records. | [optional] 
**warnings** | [**List[UsageReportsWarningsInner]**](UsageReportsWarningsInner.md) | Warnings, if any. | [optional] 

## Example

```python
from openapi_client.models.usage_reports import UsageReports

# TODO update the JSON string below
json = "{}"
# create an instance of UsageReports from a JSON string
usage_reports_instance = UsageReports.from_json(json)
# print the JSON string representation of the object
print(UsageReports.to_json())

# convert the object into a dict
usage_reports_dict = usage_reports_instance.to_dict()
# create an instance of UsageReports from a dict
usage_reports_from_dict = UsageReports.from_dict(usage_reports_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


