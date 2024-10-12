# GoogleCloudContactcenterinsightsV1SentimentData

The data for a sentiment annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**magnitude** | **float** | A non-negative number from 0 to infinity which represents the abolute magnitude of sentiment regardless of score. | [optional] 
**score** | **float** | The sentiment score between -1.0 (negative) and 1.0 (positive). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_sentiment_data import GoogleCloudContactcenterinsightsV1SentimentData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1SentimentData from a JSON string
google_cloud_contactcenterinsights_v1_sentiment_data_instance = GoogleCloudContactcenterinsightsV1SentimentData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1SentimentData.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_sentiment_data_dict = google_cloud_contactcenterinsights_v1_sentiment_data_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1SentimentData from a dict
google_cloud_contactcenterinsights_v1_sentiment_data_from_dict = GoogleCloudContactcenterinsightsV1SentimentData.from_dict(google_cloud_contactcenterinsights_v1_sentiment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


