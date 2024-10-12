# PolicySnippetListByService200ResponseValueInner

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
from openapi_client.models.policy_snippet_list_by_service200_response_value_inner import PolicySnippetListByService200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of PolicySnippetListByService200ResponseValueInner from a JSON string
policy_snippet_list_by_service200_response_value_inner_instance = PolicySnippetListByService200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(PolicySnippetListByService200ResponseValueInner.to_json())

# convert the object into a dict
policy_snippet_list_by_service200_response_value_inner_dict = policy_snippet_list_by_service200_response_value_inner_instance.to_dict()
# create an instance of PolicySnippetListByService200ResponseValueInner from a dict
policy_snippet_list_by_service200_response_value_inner_from_dict = PolicySnippetListByService200ResponseValueInner.from_dict(policy_snippet_list_by_service200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


