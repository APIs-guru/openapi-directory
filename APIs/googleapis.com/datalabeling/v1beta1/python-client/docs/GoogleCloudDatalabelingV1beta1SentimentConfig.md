# GoogleCloudDatalabelingV1beta1SentimentConfig

Config for setting up sentiments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_label_sentiment_selection** | **bool** | If set to true, contributors will have the option to select sentiment of the label they selected, to mark it as negative or positive label. Default is false. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_sentiment_config import GoogleCloudDatalabelingV1beta1SentimentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1SentimentConfig from a JSON string
google_cloud_datalabeling_v1beta1_sentiment_config_instance = GoogleCloudDatalabelingV1beta1SentimentConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1SentimentConfig.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_sentiment_config_dict = google_cloud_datalabeling_v1beta1_sentiment_config_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1SentimentConfig from a dict
google_cloud_datalabeling_v1beta1_sentiment_config_from_dict = GoogleCloudDatalabelingV1beta1SentimentConfig.from_dict(google_cloud_datalabeling_v1beta1_sentiment_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


