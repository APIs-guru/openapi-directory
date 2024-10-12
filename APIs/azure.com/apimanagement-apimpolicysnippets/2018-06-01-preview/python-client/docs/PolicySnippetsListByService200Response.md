# PolicySnippetsListByService200Response

The response of the list policy snippets operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[PolicySnippetsListByService200ResponseValueInner]**](PolicySnippetsListByService200ResponseValueInner.md) | Policy snippet value. | [optional] 

## Example

```python
from openapi_client.models.policy_snippets_list_by_service200_response import PolicySnippetsListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PolicySnippetsListByService200Response from a JSON string
policy_snippets_list_by_service200_response_instance = PolicySnippetsListByService200Response.from_json(json)
# print the JSON string representation of the object
print(PolicySnippetsListByService200Response.to_json())

# convert the object into a dict
policy_snippets_list_by_service200_response_dict = policy_snippets_list_by_service200_response_instance.to_dict()
# create an instance of PolicySnippetsListByService200Response from a dict
policy_snippets_list_by_service200_response_from_dict = PolicySnippetsListByService200Response.from_dict(policy_snippets_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


