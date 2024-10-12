# PolicySnippetListByService200Response

The response of the list policy snippets operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[PolicySnippetListByService200ResponseValueInner]**](PolicySnippetListByService200ResponseValueInner.md) | Policy snippet value. | [optional] 

## Example

```python
from openapi_client.models.policy_snippet_list_by_service200_response import PolicySnippetListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PolicySnippetListByService200Response from a JSON string
policy_snippet_list_by_service200_response_instance = PolicySnippetListByService200Response.from_json(json)
# print the JSON string representation of the object
print(PolicySnippetListByService200Response.to_json())

# convert the object into a dict
policy_snippet_list_by_service200_response_dict = policy_snippet_list_by_service200_response_instance.to_dict()
# create an instance of PolicySnippetListByService200Response from a dict
policy_snippet_list_by_service200_response_from_dict = PolicySnippetListByService200Response.from_dict(policy_snippet_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


