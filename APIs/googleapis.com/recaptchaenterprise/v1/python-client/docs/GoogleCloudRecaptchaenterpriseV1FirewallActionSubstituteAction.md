# GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction

A substitute action transparently serves a different page than the one requested.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Optional. The address to redirect to. The target is a relative path in the current host. Example: \&quot;/blog/404.html\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_firewall_action_substitute_action import GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction from a JSON string
google_cloud_recaptchaenterprise_v1_firewall_action_substitute_action_instance = GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_firewall_action_substitute_action_dict = google_cloud_recaptchaenterprise_v1_firewall_action_substitute_action_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction from a dict
google_cloud_recaptchaenterprise_v1_firewall_action_substitute_action_from_dict = GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction.from_dict(google_cloud_recaptchaenterprise_v1_firewall_action_substitute_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


