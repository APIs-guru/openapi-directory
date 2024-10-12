# CsvMessagesInbound

Inbound Messages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts. | [optional] 
**currency** | **str** | Currency of the price of the request. | [optional] 
**date_received** | **date** | Date of the request. | [optional] 
**direction** | [**Direction**](Direction.md) |  | [optional] 
**var_from** | **str** | Request from this number. | [optional] 
**message_body** | **str** | Body of the message sent. Only present if include_message parameter is set to true. | [optional] 
**message_id** | **str** | Id of the request. | [optional] 
**provider** | **str** | Provider of the message. | [optional] 
**to** | **str** | Request to this number. | [optional] 
**total_price** | **str** | Total price of the request. | [optional] 

## Example

```python
from openapi_client.models.csv_messages_inbound import CsvMessagesInbound

# TODO update the JSON string below
json = "{}"
# create an instance of CsvMessagesInbound from a JSON string
csv_messages_inbound_instance = CsvMessagesInbound.from_json(json)
# print the JSON string representation of the object
print(CsvMessagesInbound.to_json())

# convert the object into a dict
csv_messages_inbound_dict = csv_messages_inbound_instance.to_dict()
# create an instance of CsvMessagesInbound from a dict
csv_messages_inbound_from_dict = CsvMessagesInbound.from_dict(csv_messages_inbound_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


