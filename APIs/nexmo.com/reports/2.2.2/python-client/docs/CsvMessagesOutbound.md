# CsvMessagesOutbound

Outbound Messages

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
**var_from** | **str** | Request from this number. | [optional] 
**latency** | **int** | Latency of the request in ms. | [optional] 
**message_body** | **str** | Body of the message sent. Only present if include_message parameter is set to true. | [optional] 
**message_id** | **str** | Id of the request. | [optional] 
**provider** | **str** | Provider of the message. | [optional] 
**status** | **str** | Status of the message. | [optional] 
**to** | **str** | Request to this number. | [optional] 
**total_price** | **str** | Total price of the request. | [optional] 

## Example

```python
from openapi_client.models.csv_messages_outbound import CsvMessagesOutbound

# TODO update the JSON string below
json = "{}"
# create an instance of CsvMessagesOutbound from a JSON string
csv_messages_outbound_instance = CsvMessagesOutbound.from_json(json)
# print the JSON string representation of the object
print(CsvMessagesOutbound.to_json())

# convert the object into a dict
csv_messages_outbound_dict = csv_messages_outbound_instance.to_dict()
# create an instance of CsvMessagesOutbound from a dict
csv_messages_outbound_from_dict = CsvMessagesOutbound.from_dict(csv_messages_outbound_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


