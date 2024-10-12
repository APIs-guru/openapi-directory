# CreateNetworkGroupPolicyRequestContentFilteringAllowedUrlPatterns

Settings for allowed URL patterns

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patterns** | **List[str]** | A list of URL patterns that are allowed | [optional] 
**settings** | **str** | How URL patterns are applied. Can be &#39;network default&#39;, &#39;append&#39; or &#39;override&#39;. | [optional] 

## Example

```python
from openapi_client.models.create_network_group_policy_request_content_filtering_allowed_url_patterns import CreateNetworkGroupPolicyRequestContentFilteringAllowedUrlPatterns

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkGroupPolicyRequestContentFilteringAllowedUrlPatterns from a JSON string
create_network_group_policy_request_content_filtering_allowed_url_patterns_instance = CreateNetworkGroupPolicyRequestContentFilteringAllowedUrlPatterns.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkGroupPolicyRequestContentFilteringAllowedUrlPatterns.to_json())

# convert the object into a dict
create_network_group_policy_request_content_filtering_allowed_url_patterns_dict = create_network_group_policy_request_content_filtering_allowed_url_patterns_instance.to_dict()
# create an instance of CreateNetworkGroupPolicyRequestContentFilteringAllowedUrlPatterns from a dict
create_network_group_policy_request_content_filtering_allowed_url_patterns_from_dict = CreateNetworkGroupPolicyRequestContentFilteringAllowedUrlPatterns.from_dict(create_network_group_policy_request_content_filtering_allowed_url_patterns_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


