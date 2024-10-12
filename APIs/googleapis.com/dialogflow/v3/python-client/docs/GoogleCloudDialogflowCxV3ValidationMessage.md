# GoogleCloudDialogflowCxV3ValidationMessage

Agent/flow validation message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | The message detail. | [optional] 
**resource_names** | [**List[GoogleCloudDialogflowCxV3ResourceName]**](GoogleCloudDialogflowCxV3ResourceName.md) | The resource names of the resources where the message is found. | [optional] 
**resource_type** | **str** | The type of the resources where the message is found. | [optional] 
**resources** | **List[str]** | The names of the resources where the message is found. | [optional] 
**severity** | **str** | Indicates the severity of the message. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_validation_message import GoogleCloudDialogflowCxV3ValidationMessage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ValidationMessage from a JSON string
google_cloud_dialogflow_cx_v3_validation_message_instance = GoogleCloudDialogflowCxV3ValidationMessage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ValidationMessage.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_validation_message_dict = google_cloud_dialogflow_cx_v3_validation_message_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ValidationMessage from a dict
google_cloud_dialogflow_cx_v3_validation_message_from_dict = GoogleCloudDialogflowCxV3ValidationMessage.from_dict(google_cloud_dialogflow_cx_v3_validation_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


