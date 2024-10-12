# GoogleCloudContactcenterinsightsV1Settings

The settings resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_config** | [**GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig**](GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig.md) |  | [optional] 
**conversation_ttl** | **str** | The default TTL for newly-created conversations. If a conversation has a specified expiration, that value will be used instead. Changing this value will not change the expiration of existing conversations. Conversations with no expire time persist until they are deleted. | [optional] 
**create_time** | **str** | Output only. The time at which the settings was created. | [optional] [readonly] 
**language_code** | **str** | A language code to be applied to each transcript segment unless the segment already specifies a language code. Language code defaults to \&quot;en-US\&quot; if it is neither specified on the segment nor here. | [optional] 
**name** | **str** | Immutable. The resource name of the settings resource. Format: projects/{project}/locations/{location}/settings | [optional] 
**pubsub_notification_settings** | **Dict[str, str]** | A map that maps a notification trigger to a Pub/Sub topic. Each time a specified trigger occurs, Insights will notify the corresponding Pub/Sub topic. Keys are notification triggers. Supported keys are: * \&quot;all-triggers\&quot;: Notify each time any of the supported triggers occurs. * \&quot;create-analysis\&quot;: Notify each time an analysis is created. * \&quot;create-conversation\&quot;: Notify each time a conversation is created. * \&quot;export-insights-data\&quot;: Notify each time an export is complete. * \&quot;update-conversation\&quot;: Notify each time a conversation is updated via UpdateConversation. * \&quot;upload-conversation\&quot;: Notify when an UploadConversation LRO completes. Values are Pub/Sub topics. The format of each Pub/Sub topic is: projects/{project}/topics/{topic} | [optional] 
**redaction_config** | [**GoogleCloudContactcenterinsightsV1RedactionConfig**](GoogleCloudContactcenterinsightsV1RedactionConfig.md) |  | [optional] 
**speech_config** | [**GoogleCloudContactcenterinsightsV1SpeechConfig**](GoogleCloudContactcenterinsightsV1SpeechConfig.md) |  | [optional] 
**update_time** | **str** | Output only. The time at which the settings were last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_settings import GoogleCloudContactcenterinsightsV1Settings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1Settings from a JSON string
google_cloud_contactcenterinsights_v1_settings_instance = GoogleCloudContactcenterinsightsV1Settings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1Settings.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_settings_dict = google_cloud_contactcenterinsights_v1_settings_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1Settings from a dict
google_cloud_contactcenterinsights_v1_settings_from_dict = GoogleCloudContactcenterinsightsV1Settings.from_dict(google_cloud_contactcenterinsights_v1_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


