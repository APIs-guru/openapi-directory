# CreateNetworkGroupPolicyRequestContentFiltering

The content filtering settings for your group policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_url_patterns** | [**CreateNetworkGroupPolicyRequestContentFilteringAllowedUrlPatterns**](CreateNetworkGroupPolicyRequestContentFilteringAllowedUrlPatterns.md) |  | [optional] 
**blocked_url_categories** | [**CreateNetworkGroupPolicyRequestContentFilteringBlockedUrlCategories**](CreateNetworkGroupPolicyRequestContentFilteringBlockedUrlCategories.md) |  | [optional] 
**blocked_url_patterns** | [**CreateNetworkGroupPolicyRequestContentFilteringBlockedUrlPatterns**](CreateNetworkGroupPolicyRequestContentFilteringBlockedUrlPatterns.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_network_group_policy_request_content_filtering import CreateNetworkGroupPolicyRequestContentFiltering

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkGroupPolicyRequestContentFiltering from a JSON string
create_network_group_policy_request_content_filtering_instance = CreateNetworkGroupPolicyRequestContentFiltering.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkGroupPolicyRequestContentFiltering.to_json())

# convert the object into a dict
create_network_group_policy_request_content_filtering_dict = create_network_group_policy_request_content_filtering_instance.to_dict()
# create an instance of CreateNetworkGroupPolicyRequestContentFiltering from a dict
create_network_group_policy_request_content_filtering_from_dict = CreateNetworkGroupPolicyRequestContentFiltering.from_dict(create_network_group_policy_request_content_filtering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


