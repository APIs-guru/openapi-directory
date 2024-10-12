# PolicySnippetsListByService200ResponseValueInner

Policy snippet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Snippet content. | [optional] [readonly] 
**name** | **str** | Snippet name. | [optional] [readonly] 
**scope** | **int** | Binary OR value of the Snippet scope. | [optional] [readonly] 
**tool_tip** | **str** | Snippet toolTip. | [optional] [readonly] 

## Example

```python
from openapi_client.models.policy_snippets_list_by_service200_response_value_inner import PolicySnippetsListByService200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of PolicySnippetsListByService200ResponseValueInner from a JSON string
policy_snippets_list_by_service200_response_value_inner_instance = PolicySnippetsListByService200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(PolicySnippetsListByService200ResponseValueInner.to_json())

# convert the object into a dict
policy_snippets_list_by_service200_response_value_inner_dict = policy_snippets_list_by_service200_response_value_inner_instance.to_dict()
# create an instance of PolicySnippetsListByService200ResponseValueInner from a dict
policy_snippets_list_by_service200_response_value_inner_from_dict = PolicySnippetsListByService200ResponseValueInner.from_dict(policy_snippets_list_by_service200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


