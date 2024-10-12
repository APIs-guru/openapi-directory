# ReportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts. | 
**callback_url** | **str** | URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report). | [optional] 
**date_end** | **date** | ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format &#x60;yyyy-mm-ddThh:mm:ss[.sss]±hh:mm&#x60; or &#x60;yyyy-mm-ddThh:mm:ss[.sss]Z&#x60;) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field &#x60;date_received&#x60; in the CDR. &lt;br&gt;If unspecified, defaults to the current time.  | [optional] 
**date_start** | **date** | ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format &#x60;yyyy-mm-ddThh:mm:ss[.sss]±hh:mm&#x60; or &#x60;yyyy-mm-ddThh:mm:ss[.sss]Z&#x60;) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field &#x60;date_received&#x60; (&#x60;date_start&#x60; for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field &#x60;date_received&#x60; (&#x60;date_start&#x60; for Voice) in the CDR.&lt;br&gt;If unspecified, defaults  to seven days ago.  | [optional] 
**include_subaccounts** | **bool** | Whether to include subaccounts or not. | [optional] [default to False]
**product** | [**Product**](Product.md) |  | 

## Example

```python
from openapi_client.models.report_request import ReportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReportRequest from a JSON string
report_request_instance = ReportRequest.from_json(json)
# print the JSON string representation of the object
print(ReportRequest.to_json())

# convert the object into a dict
report_request_dict = report_request_instance.to_dict()
# create an instance of ReportRequest from a dict
report_request_from_dict = ReportRequest.from_dict(report_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


