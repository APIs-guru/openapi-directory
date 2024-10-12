# MessagesResponseGetReport

Messages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Links**](Links.md) |  | [optional] 
**account_id** | **str** | The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts. | 
**callback_url** | **str** | URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report). | [optional] 
**date_end** | **date** | ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format &#x60;yyyy-mm-ddThh:mm:ss[.sss]±hh:mm&#x60; or &#x60;yyyy-mm-ddThh:mm:ss[.sss]Z&#x60;) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field &#x60;date_received&#x60; in the CDR. &lt;br&gt;If unspecified, defaults to the current time.  | [optional] 
**date_start** | **date** | ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format &#x60;yyyy-mm-ddThh:mm:ss[.sss]±hh:mm&#x60; or &#x60;yyyy-mm-ddThh:mm:ss[.sss]Z&#x60;) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field &#x60;date_received&#x60; (&#x60;date_start&#x60; for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field &#x60;date_received&#x60; (&#x60;date_start&#x60; for Voice) in the CDR.&lt;br&gt;If unspecified, defaults  to seven days ago.  | [optional] 
**include_subaccounts** | **bool** | Whether to include subaccounts or not. | [optional] [default to False]
**items_count** | **int** | The number of rows in the resulting file (when report has been completed). | [optional] 
**product** | [**ProductMessages**](ProductMessages.md) |  | 
**receive_time** | **date** | Time at which the report request was received by the service. | [optional] 
**request_id** | **str** | UUID of the request. | [optional] 
**request_status** | [**RequestStatus**](RequestStatus.md) |  | [optional] 
**start_time** | **date** | Time at which the report processing of the report has started. | [optional] 
**direction** | [**Direction**](Direction.md) |  | 
**var_from** | **str** | Request from this number. | [optional] 
**id** | **str** | Search only messages with the specified uuid. | [optional] 
**include_message** | **bool** | Include the text of messages in the report. | [optional] [default to False]
**to** | **str** | Request to this number. | [optional] 

## Example

```python
from openapi_client.models.messages_response_get_report import MessagesResponseGetReport

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesResponseGetReport from a JSON string
messages_response_get_report_instance = MessagesResponseGetReport.from_json(json)
# print the JSON string representation of the object
print(MessagesResponseGetReport.to_json())

# convert the object into a dict
messages_response_get_report_dict = messages_response_get_report_instance.to_dict()
# create an instance of MessagesResponseGetReport from a dict
messages_response_get_report_from_dict = MessagesResponseGetReport.from_dict(messages_response_get_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


