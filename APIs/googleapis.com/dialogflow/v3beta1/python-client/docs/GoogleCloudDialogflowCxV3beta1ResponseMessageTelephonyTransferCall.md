# GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall

Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** | Transfer the call to a phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_response_message_telephony_transfer_call import GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall from a JSON string
google_cloud_dialogflow_cx_v3beta1_response_message_telephony_transfer_call_instance = GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_response_message_telephony_transfer_call_dict = google_cloud_dialogflow_cx_v3beta1_response_message_telephony_transfer_call_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall from a dict
google_cloud_dialogflow_cx_v3beta1_response_message_telephony_transfer_call_from_dict = GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall.from_dict(google_cloud_dialogflow_cx_v3beta1_response_message_telephony_transfer_call_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


