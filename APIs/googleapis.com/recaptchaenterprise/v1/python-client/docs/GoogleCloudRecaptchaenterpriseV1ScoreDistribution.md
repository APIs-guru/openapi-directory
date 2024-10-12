# GoogleCloudRecaptchaenterpriseV1ScoreDistribution

Score distribution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score_buckets** | **Dict[str, str]** | Map key is score value multiplied by 100. The scores are discrete values between [0, 1]. The maximum number of buckets is on order of a few dozen, but typically much lower (ie. 10). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_score_distribution import GoogleCloudRecaptchaenterpriseV1ScoreDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1ScoreDistribution from a JSON string
google_cloud_recaptchaenterprise_v1_score_distribution_instance = GoogleCloudRecaptchaenterpriseV1ScoreDistribution.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1ScoreDistribution.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_score_distribution_dict = google_cloud_recaptchaenterprise_v1_score_distribution_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1ScoreDistribution from a dict
google_cloud_recaptchaenterprise_v1_score_distribution_from_dict = GoogleCloudRecaptchaenterpriseV1ScoreDistribution.from_dict(google_cloud_recaptchaenterprise_v1_score_distribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


