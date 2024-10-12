# GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction

A set header action sets a header and forwards the request to the backend. This can be used to trigger custom protection implemented on the backend.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Optional. The header key to set in the request to the backend server. | [optional] 
**value** | **str** | Optional. The header value to set in the request to the backend server. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_firewall_action_set_header_action import GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction from a JSON string
google_cloud_recaptchaenterprise_v1_firewall_action_set_header_action_instance = GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_firewall_action_set_header_action_dict = google_cloud_recaptchaenterprise_v1_firewall_action_set_header_action_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction from a dict
google_cloud_recaptchaenterprise_v1_firewall_action_set_header_action_from_dict = GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction.from_dict(google_cloud_recaptchaenterprise_v1_firewall_action_set_header_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


