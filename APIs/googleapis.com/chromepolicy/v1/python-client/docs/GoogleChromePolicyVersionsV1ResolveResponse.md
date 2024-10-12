# GoogleChromePolicyVersionsV1ResolveResponse

Response message for getting the resolved policy value for a specific target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The page token used to get the next set of resolved policies found by the request. | [optional] 
**resolved_policies** | [**List[GoogleChromePolicyVersionsV1ResolvedPolicy]**](GoogleChromePolicyVersionsV1ResolvedPolicy.md) | The list of resolved policies found by the resolve request. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_resolve_response import GoogleChromePolicyVersionsV1ResolveResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1ResolveResponse from a JSON string
google_chrome_policy_versions_v1_resolve_response_instance = GoogleChromePolicyVersionsV1ResolveResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1ResolveResponse.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_resolve_response_dict = google_chrome_policy_versions_v1_resolve_response_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1ResolveResponse from a dict
google_chrome_policy_versions_v1_resolve_response_from_dict = GoogleChromePolicyVersionsV1ResolveResponse.from_dict(google_chrome_policy_versions_v1_resolve_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


