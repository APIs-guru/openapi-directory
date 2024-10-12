# GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesRequest

The reorder firewall policies request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | **List[str]** | Required. A list containing all policy names, in the new order. Each name is in the format &#x60;projects/{project}/firewallpolicies/{firewallpolicy}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_reorder_firewall_policies_request import GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesRequest from a JSON string
google_cloud_recaptchaenterprise_v1_reorder_firewall_policies_request_instance = GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesRequest.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_reorder_firewall_policies_request_dict = google_cloud_recaptchaenterprise_v1_reorder_firewall_policies_request_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesRequest from a dict
google_cloud_recaptchaenterprise_v1_reorder_firewall_policies_request_from_dict = GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesRequest.from_dict(google_cloud_recaptchaenterprise_v1_reorder_firewall_policies_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


