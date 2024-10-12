# GoogleChromePolicyVersionsV1PolicyApiLifecycle

Lifecycle information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deprecated_in_favor_of** | **List[str]** | In the event that this policy was deprecated in favor of another policy, the fully qualified namespace(s) of the new policies as they will show in PolicyAPI. Could only be set if policy_api_lifecycle_stage is API_DEPRECATED. | [optional] 
**description** | **str** | Description about current life cycle. | [optional] 
**end_support** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**policy_api_lifecycle_stage** | **str** | Indicates current life cycle stage of the policy API. | [optional] 
**scheduled_to_deprecate_policies** | **List[str]** | Corresponding to deprecated_in_favor_of, the fully qualified namespace(s) of the old policies that will be deprecated because of introduction of this policy. This field should not be manually set but will be set and exposed through PolicyAPI automatically. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_policy_api_lifecycle import GoogleChromePolicyVersionsV1PolicyApiLifecycle

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1PolicyApiLifecycle from a JSON string
google_chrome_policy_versions_v1_policy_api_lifecycle_instance = GoogleChromePolicyVersionsV1PolicyApiLifecycle.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1PolicyApiLifecycle.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_policy_api_lifecycle_dict = google_chrome_policy_versions_v1_policy_api_lifecycle_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1PolicyApiLifecycle from a dict
google_chrome_policy_versions_v1_policy_api_lifecycle_from_dict = GoogleChromePolicyVersionsV1PolicyApiLifecycle.from_dict(google_chrome_policy_versions_v1_policy_api_lifecycle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


