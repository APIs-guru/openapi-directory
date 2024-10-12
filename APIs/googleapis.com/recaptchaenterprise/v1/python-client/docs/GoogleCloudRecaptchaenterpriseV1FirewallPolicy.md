# GoogleCloudRecaptchaenterpriseV1FirewallPolicy

A FirewallPolicy represents a single matching pattern and resulting actions to take.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[GoogleCloudRecaptchaenterpriseV1FirewallAction]**](GoogleCloudRecaptchaenterpriseV1FirewallAction.md) | Optional. The actions that the caller should take regarding user access. There should be at most one terminal action. A terminal action is any action that forces a response, such as &#x60;AllowAction&#x60;, &#x60;BlockAction&#x60; or &#x60;SubstituteAction&#x60;. Zero or more non-terminal actions such as &#x60;SetHeader&#x60; might be specified. A single policy can contain up to 16 actions. | [optional] 
**condition** | **str** | Optional. A CEL (Common Expression Language) conditional expression that specifies if this policy applies to an incoming user request. If this condition evaluates to true and the requested path matched the path pattern, the associated actions should be executed by the caller. The condition string is checked for CEL syntax correctness on creation. For more information, see the [CEL spec](https://github.com/google/cel-spec) and its [language definition](https://github.com/google/cel-spec/blob/master/doc/langdef.md). A condition has a max length of 500 characters. | [optional] 
**description** | **str** | Optional. A description of what this policy aims to achieve, for convenience purposes. The description can at most include 256 UTF-8 characters. | [optional] 
**name** | **str** | Identifier. The resource name for the FirewallPolicy in the format &#x60;projects/{project}/firewallpolicies/{firewallpolicy}&#x60;. | [optional] 
**path** | **str** | Optional. The path for which this policy applies, specified as a glob pattern. For more information on glob, see the [manual page](https://man7.org/linux/man-pages/man7/glob.7.html). A path has a max length of 200 characters. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_firewall_policy import GoogleCloudRecaptchaenterpriseV1FirewallPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1FirewallPolicy from a JSON string
google_cloud_recaptchaenterprise_v1_firewall_policy_instance = GoogleCloudRecaptchaenterpriseV1FirewallPolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1FirewallPolicy.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_firewall_policy_dict = google_cloud_recaptchaenterprise_v1_firewall_policy_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1FirewallPolicy from a dict
google_cloud_recaptchaenterprise_v1_firewall_policy_from_dict = GoogleCloudRecaptchaenterpriseV1FirewallPolicy.from_dict(google_cloud_recaptchaenterprise_v1_firewall_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


