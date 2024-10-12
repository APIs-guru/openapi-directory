# GoogleCloudContactcenterinsightsV1DialogflowInteractionData

Dialogflow interaction data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | The confidence of the match ranging from 0.0 (completely uncertain) to 1.0 (completely certain). | [optional] 
**dialogflow_intent_id** | **str** | The Dialogflow intent resource path. Format: projects/{project}/agent/{agent}/intents/{intent} | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_dialogflow_interaction_data import GoogleCloudContactcenterinsightsV1DialogflowInteractionData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1DialogflowInteractionData from a JSON string
google_cloud_contactcenterinsights_v1_dialogflow_interaction_data_instance = GoogleCloudContactcenterinsightsV1DialogflowInteractionData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1DialogflowInteractionData.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_dialogflow_interaction_data_dict = google_cloud_contactcenterinsights_v1_dialogflow_interaction_data_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1DialogflowInteractionData from a dict
google_cloud_contactcenterinsights_v1_dialogflow_interaction_data_from_dict = GoogleCloudContactcenterinsightsV1DialogflowInteractionData.from_dict(google_cloud_contactcenterinsights_v1_dialogflow_interaction_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


