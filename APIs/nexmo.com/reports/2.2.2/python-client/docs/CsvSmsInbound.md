# CsvSmsInbound

Inbound SMS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts. | [optional] 
**country** | **str** | Country where the request was sent. | [optional] 
**country_name** | **str** | Country name where the request was sent. | [optional] 
**currency** | **str** | Currency of the price of the request. | [optional] 
**date_received** | **date** | Date of the request. | [optional] 
**direction** | [**Direction**](Direction.md) |  | [optional] 
**var_from** | **str** | Request from this number. | [optional] 
**message_body** | **str** | Body of the message sent. Only present if include_message parameter is set to true. | [optional] 
**message_id** | **str** | Id of the request. | [optional] 
**network** | **str** | Network used to send the request. | [optional] 
**network_name** | **str** | Name of the network used to send the request. | [optional] 
**to** | **str** | Request to this number. | [optional] 
**total_price** | **str** | Price of the request. | [optional] 

## Example

```python
from openapi_client.models.csv_sms_inbound import CsvSmsInbound

# TODO update the JSON string below
json = "{}"
# create an instance of CsvSmsInbound from a JSON string
csv_sms_inbound_instance = CsvSmsInbound.from_json(json)
# print the JSON string representation of the object
print(CsvSmsInbound.to_json())

# convert the object into a dict
csv_sms_inbound_dict = csv_sms_inbound_instance.to_dict()
# create an instance of CsvSmsInbound from a dict
csv_sms_inbound_from_dict = CsvSmsInbound.from_dict(csv_sms_inbound_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


