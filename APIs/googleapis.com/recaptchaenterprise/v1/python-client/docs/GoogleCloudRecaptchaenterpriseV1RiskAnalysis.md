# GoogleCloudRecaptchaenterpriseV1RiskAnalysis

Risk analysis result for an event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extended_verdict_reasons** | **List[str]** | Output only. Extended verdict reasons to be used for experimentation only. The set of possible reasons is subject to change. | [optional] [readonly] 
**reasons** | **List[str]** | Output only. Reasons contributing to the risk analysis verdict. | [optional] [readonly] 
**score** | **float** | Output only. Legitimate event score from 0.0 to 1.0. (1.0 means very likely legitimate traffic while 0.0 means very likely non-legitimate traffic). | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_risk_analysis import GoogleCloudRecaptchaenterpriseV1RiskAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1RiskAnalysis from a JSON string
google_cloud_recaptchaenterprise_v1_risk_analysis_instance = GoogleCloudRecaptchaenterpriseV1RiskAnalysis.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1RiskAnalysis.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_risk_analysis_dict = google_cloud_recaptchaenterprise_v1_risk_analysis_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1RiskAnalysis from a dict
google_cloud_recaptchaenterprise_v1_risk_analysis_from_dict = GoogleCloudRecaptchaenterpriseV1RiskAnalysis.from_dict(google_cloud_recaptchaenterprise_v1_risk_analysis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


