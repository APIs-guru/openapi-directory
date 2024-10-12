# GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig

Smart reply specific configuration for evaluation job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowlist_document** | **str** | The allowlist document resource name. Format: &#x60;projects//knowledgeBases//documents/&#x60;. Only used for smart reply model. | [optional] 
**max_result_count** | **int** | Required. The model to be evaluated can return multiple results with confidence score on each query. These results will be sorted by the descending order of the scores and we only keep the first max_result_count results as the final results to evaluate. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_evaluation_config_smart_reply_config import GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig from a JSON string
google_cloud_dialogflow_v2_evaluation_config_smart_reply_config_instance = GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_evaluation_config_smart_reply_config_dict = google_cloud_dialogflow_v2_evaluation_config_smart_reply_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig from a dict
google_cloud_dialogflow_v2_evaluation_config_smart_reply_config_from_dict = GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig.from_dict(google_cloud_dialogflow_v2_evaluation_config_smart_reply_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


