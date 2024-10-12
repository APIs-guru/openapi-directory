# CsvVerify

Verify

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts. | [optional] 
**country** | **str** | Country where the request was sent. | [optional] 
**country_name** | **str** | Country name where the request was sent. | [optional] 
**currency** | **str** | Currency of the price of the request. | [optional] 
**date_finalized** | **date** | Date when the request was finalized. | [optional] 
**date_received** | **date** | Date of the request. | [optional] 
**estimated_price** | **str** | Estimated price of the verify request. | [optional] 
**first_event_date** | **date** | Date of the first verify event. | [optional] 
**var_from** | **str** | Request from this number. | [optional] 
**last_event_date** | **date** | Date of the last verify event. | [optional] 
**locale** | **str** | Locale used for the TTS. | [optional] 
**network** | **str** | Network used to send the request. | [optional] 
**network_name** | **str** | Name of the network used to send the request. | [optional] 
**number_type** | **str** | Type of phone number to which requests are sent. | [optional] 
**price** | **str** | Price of the request. | [optional] 
**pricing_model** | **str** | Pricing model used for this request. | [optional] 
**request_id** | **str** | UUID of the request. | [optional] 
**sms_event_count** | **int** | Number of sms sent for this verify request. | [optional] 
**to** | **str** | Request to this number. | [optional] 
**tts_event_count** | **int** | Number of tts sent for this verify request. | [optional] 
**verify_status** | **str** | Status of the verify request. | [optional] 

## Example

```python
from openapi_client.models.csv_verify import CsvVerify

# TODO update the JSON string below
json = "{}"
# create an instance of CsvVerify from a JSON string
csv_verify_instance = CsvVerify.from_json(json)
# print the JSON string representation of the object
print(CsvVerify.to_json())

# convert the object into a dict
csv_verify_dict = csv_verify_instance.to_dict()
# create an instance of CsvVerify from a dict
csv_verify_from_dict = CsvVerify.from_dict(csv_verify_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


