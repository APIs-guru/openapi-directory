# GoogleCloudContactcenterinsightsV1alpha1DialogflowSource

A Dialogflow source of conversation data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_uri** | **str** | Cloud Storage URI that points to a file that contains the conversation audio. | [optional] 
**dialogflow_conversation** | **str** | Output only. The name of the Dialogflow conversation that this conversation resource is derived from. Format: projects/{project}/locations/{location}/conversations/{conversation} | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_dialogflow_source import GoogleCloudContactcenterinsightsV1alpha1DialogflowSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1DialogflowSource from a JSON string
google_cloud_contactcenterinsights_v1alpha1_dialogflow_source_instance = GoogleCloudContactcenterinsightsV1alpha1DialogflowSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1DialogflowSource.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_dialogflow_source_dict = google_cloud_contactcenterinsights_v1alpha1_dialogflow_source_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1DialogflowSource from a dict
google_cloud_contactcenterinsights_v1alpha1_dialogflow_source_from_dict = GoogleCloudContactcenterinsightsV1alpha1DialogflowSource.from_dict(google_cloud_contactcenterinsights_v1alpha1_dialogflow_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


