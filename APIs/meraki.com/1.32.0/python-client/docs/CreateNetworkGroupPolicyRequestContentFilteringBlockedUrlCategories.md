# CreateNetworkGroupPolicyRequestContentFilteringBlockedUrlCategories

Settings for blocked URL categories

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | **List[str]** | A list of URL categories to block | [optional] 
**settings** | **str** | How URL categories are applied. Can be &#39;network default&#39;, &#39;append&#39; or &#39;override&#39;. | [optional] 

## Example

```python
from openapi_client.models.create_network_group_policy_request_content_filtering_blocked_url_categories import CreateNetworkGroupPolicyRequestContentFilteringBlockedUrlCategories

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkGroupPolicyRequestContentFilteringBlockedUrlCategories from a JSON string
create_network_group_policy_request_content_filtering_blocked_url_categories_instance = CreateNetworkGroupPolicyRequestContentFilteringBlockedUrlCategories.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkGroupPolicyRequestContentFilteringBlockedUrlCategories.to_json())

# convert the object into a dict
create_network_group_policy_request_content_filtering_blocked_url_categories_dict = create_network_group_policy_request_content_filtering_blocked_url_categories_instance.to_dict()
# create an instance of CreateNetworkGroupPolicyRequestContentFilteringBlockedUrlCategories from a dict
create_network_group_policy_request_content_filtering_blocked_url_categories_from_dict = CreateNetworkGroupPolicyRequestContentFilteringBlockedUrlCategories.from_dict(create_network_group_policy_request_content_filtering_blocked_url_categories_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


