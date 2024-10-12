# GoogleCloudDialogflowV2EvaluationConfig

The configuration for model evaluation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datasets** | [**List[GoogleCloudDialogflowV2InputDataset]**](GoogleCloudDialogflowV2InputDataset.md) | Required. Datasets used for evaluation. | [optional] 
**smart_compose_config** | [**GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig**](GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig.md) |  | [optional] 
**smart_reply_config** | [**GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig**](GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_evaluation_config import GoogleCloudDialogflowV2EvaluationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2EvaluationConfig from a JSON string
google_cloud_dialogflow_v2_evaluation_config_instance = GoogleCloudDialogflowV2EvaluationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2EvaluationConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_evaluation_config_dict = google_cloud_dialogflow_v2_evaluation_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2EvaluationConfig from a dict
google_cloud_dialogflow_v2_evaluation_config_from_dict = GoogleCloudDialogflowV2EvaluationConfig.from_dict(google_cloud_dialogflow_v2_evaluation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


