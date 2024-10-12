# GoogleCloudRecaptchaenterpriseV1Metrics

Metrics for a single Key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**challenge_metrics** | [**List[GoogleCloudRecaptchaenterpriseV1ChallengeMetrics]**](GoogleCloudRecaptchaenterpriseV1ChallengeMetrics.md) | Metrics will be continuous and in order by dates, and in the granularity of day. Only challenge-based keys (CHECKBOX, INVISIBLE), will have challenge-based data. | [optional] 
**name** | **str** | Output only. Identifier. The name of the metrics, in the format &#x60;projects/{project}/keys/{key}/metrics&#x60;. | [optional] [readonly] 
**score_metrics** | [**List[GoogleCloudRecaptchaenterpriseV1ScoreMetrics]**](GoogleCloudRecaptchaenterpriseV1ScoreMetrics.md) | Metrics will be continuous and in order by dates, and in the granularity of day. All Key types should have score-based data. | [optional] 
**start_time** | **str** | Inclusive start time aligned to a day (UTC). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_metrics import GoogleCloudRecaptchaenterpriseV1Metrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1Metrics from a JSON string
google_cloud_recaptchaenterprise_v1_metrics_instance = GoogleCloudRecaptchaenterpriseV1Metrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1Metrics.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_metrics_dict = google_cloud_recaptchaenterprise_v1_metrics_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1Metrics from a dict
google_cloud_recaptchaenterprise_v1_metrics_from_dict = GoogleCloudRecaptchaenterpriseV1Metrics.from_dict(google_cloud_recaptchaenterprise_v1_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


