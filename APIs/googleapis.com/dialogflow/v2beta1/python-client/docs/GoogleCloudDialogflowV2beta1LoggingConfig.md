# GoogleCloudDialogflowV2beta1LoggingConfig

Defines logging behavior for conversation lifecycle events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_stackdriver_logging** | **bool** | Whether to log conversation events like CONVERSATION_STARTED to Stackdriver in the conversation project as JSON format ConversationEvent protos. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_logging_config import GoogleCloudDialogflowV2beta1LoggingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1LoggingConfig from a JSON string
google_cloud_dialogflow_v2beta1_logging_config_instance = GoogleCloudDialogflowV2beta1LoggingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1LoggingConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_logging_config_dict = google_cloud_dialogflow_v2beta1_logging_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1LoggingConfig from a dict
google_cloud_dialogflow_v2beta1_logging_config_from_dict = GoogleCloudDialogflowV2beta1LoggingConfig.from_dict(google_cloud_dialogflow_v2beta1_logging_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


