# GoogleCloudDialogflowCxV3beta1SessionInfo

Represents session information communicated to and from the webhook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **Dict[str, object]** | Optional for WebhookRequest. Optional for WebhookResponse. All parameters collected from forms and intents during the session. Parameters can be created, updated, or removed by the webhook. To remove a parameter from the session, the webhook should explicitly set the parameter value to null in WebhookResponse. The map is keyed by parameters&#39; display names. | [optional] 
**session** | **str** | Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the session. This field can be used by the webhook to identify a session. Format: &#x60;projects//locations//agents//sessions/&#x60; or &#x60;projects//locations//agents//environments//sessions/&#x60; if environment is specified. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_session_info import GoogleCloudDialogflowCxV3beta1SessionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1SessionInfo from a JSON string
google_cloud_dialogflow_cx_v3beta1_session_info_instance = GoogleCloudDialogflowCxV3beta1SessionInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1SessionInfo.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_session_info_dict = google_cloud_dialogflow_cx_v3beta1_session_info_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1SessionInfo from a dict
google_cloud_dialogflow_cx_v3beta1_session_info_from_dict = GoogleCloudDialogflowCxV3beta1SessionInfo.from_dict(google_cloud_dialogflow_cx_v3beta1_session_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


