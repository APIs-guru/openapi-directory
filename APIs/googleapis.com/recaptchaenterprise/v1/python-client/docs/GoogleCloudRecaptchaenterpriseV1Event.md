# GoogleCloudRecaptchaenterpriseV1Event

The event being assessed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected_action** | **str** | Optional. The expected action for this type of event. This should be the same action provided at token generation time on client-side platforms already integrated with recaptcha enterprise. | [optional] 
**express** | **bool** | Optional. Flag for a reCAPTCHA express request for an assessment without a token. If enabled, &#x60;site_key&#x60; must reference a SCORE key with WAF feature set to EXPRESS. | [optional] 
**firewall_policy_evaluation** | **bool** | Optional. Flag for enabling firewall policy config assessment. If this flag is enabled, the firewall policy will be evaluated and a suggested firewall action will be returned in the response. | [optional] 
**hashed_account_id** | **bytearray** | Optional. Deprecated: use &#x60;user_info.account_id&#x60; instead. Unique stable hashed user identifier for the request. The identifier must be hashed using hmac-sha256 with stable secret. | [optional] 
**headers** | **List[str]** | Optional. HTTP header information about the request. | [optional] 
**ja3** | **str** | Optional. JA3 fingerprint for SSL clients. | [optional] 
**requested_uri** | **str** | Optional. The URI resource the user requested that triggered an assessment. | [optional] 
**site_key** | **str** | Optional. The site key that was used to invoke reCAPTCHA Enterprise on your site and generate the token. | [optional] 
**token** | **str** | Optional. The user response token provided by the reCAPTCHA Enterprise client-side integration on your site. | [optional] 
**transaction_data** | [**GoogleCloudRecaptchaenterpriseV1TransactionData**](GoogleCloudRecaptchaenterpriseV1TransactionData.md) |  | [optional] 
**user_agent** | **str** | Optional. The user agent present in the request from the user&#39;s device related to this event. | [optional] 
**user_info** | [**GoogleCloudRecaptchaenterpriseV1UserInfo**](GoogleCloudRecaptchaenterpriseV1UserInfo.md) |  | [optional] 
**user_ip_address** | **str** | Optional. The IP address in the request from the user&#39;s device related to this event. | [optional] 
**waf_token_assessment** | **bool** | Optional. Flag for running WAF token assessment. If enabled, the token must be specified, and have been created by a WAF-enabled key. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_event import GoogleCloudRecaptchaenterpriseV1Event

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1Event from a JSON string
google_cloud_recaptchaenterprise_v1_event_instance = GoogleCloudRecaptchaenterpriseV1Event.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1Event.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_event_dict = google_cloud_recaptchaenterprise_v1_event_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1Event from a dict
google_cloud_recaptchaenterprise_v1_event_from_dict = GoogleCloudRecaptchaenterpriseV1Event.from_dict(google_cloud_recaptchaenterprise_v1_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


