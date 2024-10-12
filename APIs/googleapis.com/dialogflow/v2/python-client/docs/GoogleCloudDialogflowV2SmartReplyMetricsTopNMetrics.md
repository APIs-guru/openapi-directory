# GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics

Evaluation metrics when retrieving `n` smart replies with the model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**n** | **int** | Number of retrieved smart replies. For example, when &#x60;n&#x60; is 3, this evaluation contains metrics for when Dialogflow retrieves 3 smart replies with the model. | [optional] 
**recall** | **float** | Defined as &#x60;number of queries whose top n smart replies have at least one similar (token match similarity above the defined threshold) reply as the real reply&#x60; divided by &#x60;number of queries with at least one smart reply&#x60;. Value ranges from 0.0 to 1.0 inclusive. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_smart_reply_metrics_top_n_metrics import GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics from a JSON string
google_cloud_dialogflow_v2_smart_reply_metrics_top_n_metrics_instance = GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_smart_reply_metrics_top_n_metrics_dict = google_cloud_dialogflow_v2_smart_reply_metrics_top_n_metrics_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics from a dict
google_cloud_dialogflow_v2_smart_reply_metrics_top_n_metrics_from_dict = GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics.from_dict(google_cloud_dialogflow_v2_smart_reply_metrics_top_n_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


