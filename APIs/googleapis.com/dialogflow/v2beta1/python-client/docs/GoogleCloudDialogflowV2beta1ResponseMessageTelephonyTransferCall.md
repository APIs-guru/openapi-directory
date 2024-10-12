# GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall

Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** | Transfer the call to a phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164). | [optional] 
**sip_uri** | **str** | Transfer the call to a SIP endpoint. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_response_message_telephony_transfer_call import GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall from a JSON string
google_cloud_dialogflow_v2beta1_response_message_telephony_transfer_call_instance = GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_response_message_telephony_transfer_call_dict = google_cloud_dialogflow_v2beta1_response_message_telephony_transfer_call_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall from a dict
google_cloud_dialogflow_v2beta1_response_message_telephony_transfer_call_from_dict = GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall.from_dict(google_cloud_dialogflow_v2beta1_response_message_telephony_transfer_call_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


