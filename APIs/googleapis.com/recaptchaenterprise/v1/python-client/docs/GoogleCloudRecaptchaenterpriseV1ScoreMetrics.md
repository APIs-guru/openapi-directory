# GoogleCloudRecaptchaenterpriseV1ScoreMetrics

Metrics related to scoring.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_metrics** | [**Dict[str, GoogleCloudRecaptchaenterpriseV1ScoreDistribution]**](GoogleCloudRecaptchaenterpriseV1ScoreDistribution.md) | Action-based metrics. The map key is the action name which specified by the site owners at time of the \&quot;execute\&quot; client-side call. | [optional] 
**overall_metrics** | [**GoogleCloudRecaptchaenterpriseV1ScoreDistribution**](GoogleCloudRecaptchaenterpriseV1ScoreDistribution.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_score_metrics import GoogleCloudRecaptchaenterpriseV1ScoreMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1ScoreMetrics from a JSON string
google_cloud_recaptchaenterprise_v1_score_metrics_instance = GoogleCloudRecaptchaenterpriseV1ScoreMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1ScoreMetrics.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_score_metrics_dict = google_cloud_recaptchaenterprise_v1_score_metrics_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1ScoreMetrics from a dict
google_cloud_recaptchaenterprise_v1_score_metrics_from_dict = GoogleCloudRecaptchaenterpriseV1ScoreMetrics.from_dict(google_cloud_recaptchaenterprise_v1_score_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


