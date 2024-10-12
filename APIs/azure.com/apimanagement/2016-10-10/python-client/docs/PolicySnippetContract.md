# PolicySnippetContract

Policy snippet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Snippet content. | [optional] [readonly] 
**name** | **str** | Snippet name. | [optional] [readonly] 
**scope** | **str** | Snippet scope. | [optional] [readonly] 
**tool_tip** | **str** | Snippet toolTip. | [optional] [readonly] 

## Example

```python
from openapi_client.models.policy_snippet_contract import PolicySnippetContract

# TODO update the JSON string below
json = "{}"
# create an instance of PolicySnippetContract from a JSON string
policy_snippet_contract_instance = PolicySnippetContract.from_json(json)
# print the JSON string representation of the object
print(PolicySnippetContract.to_json())

# convert the object into a dict
policy_snippet_contract_dict = policy_snippet_contract_instance.to_dict()
# create an instance of PolicySnippetContract from a dict
policy_snippet_contract_from_dict = PolicySnippetContract.from_dict(policy_snippet_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


