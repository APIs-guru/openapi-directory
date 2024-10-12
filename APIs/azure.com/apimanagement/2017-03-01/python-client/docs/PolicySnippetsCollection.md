# PolicySnippetsCollection

The response of the list policy snippets operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[PolicySnippetContract]**](PolicySnippetContract.md) | Policy snippet value. | [optional] 

## Example

```python
from openapi_client.models.policy_snippets_collection import PolicySnippetsCollection

# TODO update the JSON string below
json = "{}"
# create an instance of PolicySnippetsCollection from a JSON string
policy_snippets_collection_instance = PolicySnippetsCollection.from_json(json)
# print the JSON string representation of the object
print(PolicySnippetsCollection.to_json())

# convert the object into a dict
policy_snippets_collection_dict = policy_snippets_collection_instance.to_dict()
# create an instance of PolicySnippetsCollection from a dict
policy_snippets_collection_from_dict = PolicySnippetsCollection.from_dict(policy_snippets_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


