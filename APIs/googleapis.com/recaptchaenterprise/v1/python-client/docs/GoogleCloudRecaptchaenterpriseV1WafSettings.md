# GoogleCloudRecaptchaenterpriseV1WafSettings

Settings specific to keys that can be used for WAF (Web Application Firewall).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**waf_feature** | **str** | Required. The WAF feature for which this key is enabled. | [optional] 
**waf_service** | **str** | Required. The WAF service that uses this key. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_waf_settings import GoogleCloudRecaptchaenterpriseV1WafSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1WafSettings from a JSON string
google_cloud_recaptchaenterprise_v1_waf_settings_instance = GoogleCloudRecaptchaenterpriseV1WafSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1WafSettings.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_waf_settings_dict = google_cloud_recaptchaenterprise_v1_waf_settings_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1WafSettings from a dict
google_cloud_recaptchaenterprise_v1_waf_settings_from_dict = GoogleCloudRecaptchaenterpriseV1WafSettings.from_dict(google_cloud_recaptchaenterprise_v1_waf_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


