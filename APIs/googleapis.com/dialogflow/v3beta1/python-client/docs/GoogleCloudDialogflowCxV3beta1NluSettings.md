# GoogleCloudDialogflowCxV3beta1NluSettings

Settings related to NLU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classification_threshold** | **float** | To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. If the returned score value is less than the threshold value, then a no-match event will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used. | [optional] 
**model_training_mode** | **str** | Indicates NLU model training mode. | [optional] 
**model_type** | **str** | Indicates the type of NLU model. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_nlu_settings import GoogleCloudDialogflowCxV3beta1NluSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1NluSettings from a JSON string
google_cloud_dialogflow_cx_v3beta1_nlu_settings_instance = GoogleCloudDialogflowCxV3beta1NluSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1NluSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_nlu_settings_dict = google_cloud_dialogflow_cx_v3beta1_nlu_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1NluSettings from a dict
google_cloud_dialogflow_cx_v3beta1_nlu_settings_from_dict = GoogleCloudDialogflowCxV3beta1NluSettings.from_dict(google_cloud_dialogflow_cx_v3beta1_nlu_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


