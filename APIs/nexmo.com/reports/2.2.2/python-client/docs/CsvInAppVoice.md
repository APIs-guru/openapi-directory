# CsvInAppVoice

In App Voice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts. | [optional] 
**application_id** | **str** | Search only for requests attached to a particular Application ID. | [optional] 
**client_ref** | **str** | Search for messages with this &#x60;client_ref&#x60;. | [optional] 
**conversation_id** | **str** | Search only for events sent to this particular Conversation. This should include the \&quot;CON-\&quot; prefix. | [optional] 
**currency** | **str** | Currency of the price of the request. | [optional] 
**date_end** | **date** | Date of the end of the call. | [optional] 
**date_start** | **date** | Date of the start of the call. | [optional] 
**duration** | **int** | Duration of the call in seconds. | [optional] 
**id** | **str** | Id of the related CDR. | [optional] 
**leg_id** | **str** | Id of the call leg. | [optional] 
**price** | **str** | Price of the request. | [optional] 
**request_id** | **str** | UUID of the request. | [optional] 
**status** | **str** | Status of the termination of the In-App call. | [optional] 
**total_price** | **str** | Total price of the request. | [optional] 
**user_id** | **str** | User id in the conversation. | [optional] 

## Example

```python
from openapi_client.models.csv_in_app_voice import CsvInAppVoice

# TODO update the JSON string below
json = "{}"
# create an instance of CsvInAppVoice from a JSON string
csv_in_app_voice_instance = CsvInAppVoice.from_json(json)
# print the JSON string representation of the object
print(CsvInAppVoice.to_json())

# convert the object into a dict
csv_in_app_voice_dict = csv_in_app_voice_instance.to_dict()
# create an instance of CsvInAppVoice from a dict
csv_in_app_voice_from_dict = CsvInAppVoice.from_dict(csv_in_app_voice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


