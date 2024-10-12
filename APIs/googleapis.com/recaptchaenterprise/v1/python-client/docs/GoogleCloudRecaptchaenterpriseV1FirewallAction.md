# GoogleCloudRecaptchaenterpriseV1FirewallAction

An individual action. Each action represents what to do if a policy matches.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow** | **object** | An allow action continues processing a request unimpeded. | [optional] 
**block** | **object** | A block action serves an HTTP error code a prevents the request from hitting the backend. | [optional] 
**include_recaptcha_script** | **object** | An include reCAPTCHA script action involves injecting reCAPTCHA JavaScript code into the HTML returned by the site backend. This reCAPTCHA script is tasked with collecting user signals on the requested web page, issuing tokens as a cookie within the site domain, and enabling their utilization in subsequent page requests. | [optional] 
**redirect** | **object** | A redirect action returns a 307 (temporary redirect) response, pointing the user to a ReCaptcha interstitial page to attach a token. | [optional] 
**set_header** | [**GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction**](GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction.md) |  | [optional] 
**substitute** | [**GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction**](GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_firewall_action import GoogleCloudRecaptchaenterpriseV1FirewallAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1FirewallAction from a JSON string
google_cloud_recaptchaenterprise_v1_firewall_action_instance = GoogleCloudRecaptchaenterpriseV1FirewallAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1FirewallAction.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_firewall_action_dict = google_cloud_recaptchaenterprise_v1_firewall_action_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1FirewallAction from a dict
google_cloud_recaptchaenterprise_v1_firewall_action_from_dict = GoogleCloudRecaptchaenterpriseV1FirewallAction.from_dict(google_cloud_recaptchaenterprise_v1_firewall_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


