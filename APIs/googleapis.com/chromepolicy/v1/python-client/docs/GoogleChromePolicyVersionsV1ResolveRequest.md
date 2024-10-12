# GoogleChromePolicyVersionsV1ResolveRequest

Request message for getting the resolved policy value for a specific target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_size** | **int** | The maximum number of policies to return, defaults to 100 and has a maximum of 1000. | [optional] 
**page_token** | **str** | The page token used to retrieve a specific page of the request. | [optional] 
**policy_schema_filter** | **str** | Required. The schema filter to apply to the resolve request. Specify a schema name to view a particular schema, for example: chrome.users.ShowLogoutButton Wildcards are supported, but only in the leaf portion of the schema name. Wildcards cannot be used in namespace directly. Please read https://developers.google.com/chrome/policy/guides/policy-schemas for details on schema namespaces. For example: Valid: \&quot;chrome.users.*\&quot;, \&quot;chrome.users.apps.*\&quot;, \&quot;chrome.printers.*\&quot; Invalid: \&quot;*\&quot;, \&quot;*.users\&quot;, \&quot;chrome.*\&quot;, \&quot;chrome.*.apps.*\&quot; | [optional] 
**policy_target_key** | [**GoogleChromePolicyVersionsV1PolicyTargetKey**](GoogleChromePolicyVersionsV1PolicyTargetKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_resolve_request import GoogleChromePolicyVersionsV1ResolveRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1ResolveRequest from a JSON string
google_chrome_policy_versions_v1_resolve_request_instance = GoogleChromePolicyVersionsV1ResolveRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1ResolveRequest.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_resolve_request_dict = google_chrome_policy_versions_v1_resolve_request_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1ResolveRequest from a dict
google_chrome_policy_versions_v1_resolve_request_from_dict = GoogleChromePolicyVersionsV1ResolveRequest.from_dict(google_chrome_policy_versions_v1_resolve_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


