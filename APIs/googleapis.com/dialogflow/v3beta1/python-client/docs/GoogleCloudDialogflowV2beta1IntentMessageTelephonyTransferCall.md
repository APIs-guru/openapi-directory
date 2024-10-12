# GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall

Transfers the call in Telephony Gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** | Required. The phone number to transfer the call to in [E.164 format](https://en.wikipedia.org/wiki/E.164). We currently only allow transferring to US numbers (+1xxxyyyzzzz). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_telephony_transfer_call import GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_telephony_transfer_call_instance = GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_telephony_transfer_call_dict = google_cloud_dialogflow_v2beta1_intent_message_telephony_transfer_call_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall from a dict
google_cloud_dialogflow_v2beta1_intent_message_telephony_transfer_call_from_dict = GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall.from_dict(google_cloud_dialogflow_v2beta1_intent_message_telephony_transfer_call_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


