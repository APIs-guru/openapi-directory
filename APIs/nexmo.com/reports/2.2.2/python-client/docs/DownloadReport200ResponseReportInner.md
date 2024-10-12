# DownloadReport200ResponseReportInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts. | [optional] 
**client_ref** | **str** | Search for messages with this &#x60;client_ref&#x60;. | [optional] 
**country** | **str** | Country where the request was sent. | [optional] 
**country_name** | **str** | Country name where the request was sent. | [optional] 
**currency** | **str** | Currency of the price of the request. | [optional] 
**date_finalized** | **date** | Date when the request was finalized. | [optional] 
**date_received** | **date** | Date of the request. | [optional] 
**direction** | [**Direction**](Direction.md) |  | [optional] 
**error_code** | **str** | Error code of the message. | [optional] 
**error_code_description** | **str** | Description of the error code of the request. | [optional] 
**var_from** | **str** | Request from this number. | [optional] 
**latency** | **int** | Latency of the request in ms. | [optional] 
**message_body** | **str** | Body of the message sent. Only present if include_message parameter is set to true. | [optional] 
**message_id** | **str** | Id of the request. | [optional] 
**network** | **str** | Network of the looked up number. | [optional] 
**network_name** | **str** | Network name of the looked up number. | [optional] 
**status** | [**AsrStatus**](AsrStatus.md) |  | [optional] 
**to** | **str** | Request to this number. | [optional] 
**total_price** | **str** | Total price of the request. | [optional] 
**call_id** | **str** | UUID of the request. | [optional] 
**date_end** | **date** | Date of the end of the call. | [optional] 
**date_start** | **date** | Date of the start of the call. | [optional] 
**duration** | **int** | Duration of the call in seconds. | [optional] 
**price** | **str** | Price of the request. | [optional] 
**status_description** | **str** | ASR error message. | [optional] 
**application_id** | **str** | Search only for requests attached to a particular Application ID. | [optional] 
**conversation_id** | **str** | Search only for events sent to this particular Conversation. This should include the \&quot;CON-\&quot; prefix. | [optional] 
**id** | **str** | Id of the related CDR. | [optional] 
**leg_id** | **str** | Id of the call leg. | [optional] 
**request_id** | **str** | UUID of the request. | [optional] 
**user_id** | **str** | User id in the conversation. | [optional] 
**estimated_price** | **str** | Estimated price of the verify request. | [optional] 
**first_event_date** | **date** | Date of the first verify event. | [optional] 
**last_event_date** | **date** | Date of the last verify event. | [optional] 
**locale** | **str** | Locale used for the TTS. | [optional] 
**number_type** | **str** | Type of phone number to which requests are sent. | [optional] 
**pricing_model** | **str** | Pricing model used for this request. | [optional] 
**sms_event_count** | **int** | Number of sms sent for this verify request. | [optional] 
**tts_event_count** | **int** | Number of tts sent for this verify request. | [optional] 
**verify_status** | **str** | Status of the verify request. | [optional] 
**first_name** | **str** | First name of the owner of the looked up number. | [optional] 
**last_name** | **str** | Last name of the owner of the looked up number. | [optional] 
**network_type** | **str** | Network type of the looked up number. | [optional] 
**number** | **str** | Number looked up for this request. | [optional] 
**ported** | **str** | Is the looked up number ported. | [optional] 
**product_type** | **str** | Type of Number Insight request. | [optional] 
**reachable** | **str** | Is the looked up number reachable. | [optional] 
**response_code** | **str** | Response code of the Number Insight request. | [optional] 
**valid** | **str** | Is the looked up number valid. | [optional] 
**provider** | **str** | Provider of the message. | [optional] 
**call_date_start** | **date** | Date of the start of the call. | [optional] 

## Example

```python
from openapi_client.models.download_report200_response_report_inner import DownloadReport200ResponseReportInner

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadReport200ResponseReportInner from a JSON string
download_report200_response_report_inner_instance = DownloadReport200ResponseReportInner.from_json(json)
# print the JSON string representation of the object
print(DownloadReport200ResponseReportInner.to_json())

# convert the object into a dict
download_report200_response_report_inner_dict = download_report200_response_report_inner_instance.to_dict()
# create an instance of DownloadReport200ResponseReportInner from a dict
download_report200_response_report_inner_from_dict = DownloadReport200ResponseReportInner.from_dict(download_report200_response_report_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


