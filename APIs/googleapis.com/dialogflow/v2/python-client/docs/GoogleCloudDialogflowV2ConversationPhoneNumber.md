# GoogleCloudDialogflowV2ConversationPhoneNumber

Represents a phone number for telephony integration. It allows for connecting a particular conversation over telephony.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** | Output only. The phone number to connect to this conversation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_conversation_phone_number import GoogleCloudDialogflowV2ConversationPhoneNumber

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ConversationPhoneNumber from a JSON string
google_cloud_dialogflow_v2_conversation_phone_number_instance = GoogleCloudDialogflowV2ConversationPhoneNumber.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ConversationPhoneNumber.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_conversation_phone_number_dict = google_cloud_dialogflow_v2_conversation_phone_number_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ConversationPhoneNumber from a dict
google_cloud_dialogflow_v2_conversation_phone_number_from_dict = GoogleCloudDialogflowV2ConversationPhoneNumber.from_dict(google_cloud_dialogflow_v2_conversation_phone_number_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


