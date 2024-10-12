# CsvVoice

Voice Call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts. | [optional] 
**call_id** | **str** | UUID of the request. | [optional] 
**country** | **str** | Country where the request was sent. | [optional] 
**country_name** | **str** | Country name where the request was sent. | [optional] 
**currency** | **str** | Currency of the price of the request. | [optional] 
**date_end** | **date** | Date of the end of the call. | [optional] 
**date_start** | **date** | Date of the start of the call. | [optional] 
**direction** | [**Direction**](Direction.md) |  | [optional] 
**duration** | **int** | Duration of the call in seconds. | [optional] 
**var_from** | **str** | Request from this number. | [optional] 
**network** | **str** | Network used to send the request. | [optional] 
**network_name** | **str** | Name of the network used to send the request. | [optional] 
**price** | **str** | Price of the request. | [optional] 
**status** | [**VoiceStatus**](VoiceStatus.md) |  | [optional] 
**status_description** | **str** | Description of the status of the call. | [optional] 
**to** | **str** | Request to this number. | [optional] 
**total_price** | **str** | Total price of the request. | [optional] 

## Example

```python
from openapi_client.models.csv_voice import CsvVoice

# TODO update the JSON string below
json = "{}"
# create an instance of CsvVoice from a JSON string
csv_voice_instance = CsvVoice.from_json(json)
# print the JSON string representation of the object
print(CsvVoice.to_json())

# convert the object into a dict
csv_voice_dict = csv_voice_instance.to_dict()
# create an instance of CsvVoice from a dict
csv_voice_from_dict = CsvVoice.from_dict(csv_voice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


