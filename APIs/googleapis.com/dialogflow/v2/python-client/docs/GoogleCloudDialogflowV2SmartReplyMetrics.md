# GoogleCloudDialogflowV2SmartReplyMetrics

The evaluation metrics for smart reply model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowlist_coverage** | **float** | Percentage of target participant messages in the evaluation dataset for which similar messages have appeared at least once in the allowlist. Should be [0, 1]. | [optional] 
**conversation_count** | **str** | Total number of conversations used to generate this metric. | [optional] 
**top_n_metrics** | [**List[GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics]**](GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics.md) | Metrics of top n smart replies, sorted by TopNMetric.n. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_smart_reply_metrics import GoogleCloudDialogflowV2SmartReplyMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2SmartReplyMetrics from a JSON string
google_cloud_dialogflow_v2_smart_reply_metrics_instance = GoogleCloudDialogflowV2SmartReplyMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2SmartReplyMetrics.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_smart_reply_metrics_dict = google_cloud_dialogflow_v2_smart_reply_metrics_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2SmartReplyMetrics from a dict
google_cloud_dialogflow_v2_smart_reply_metrics_from_dict = GoogleCloudDialogflowV2SmartReplyMetrics.from_dict(google_cloud_dialogflow_v2_smart_reply_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


