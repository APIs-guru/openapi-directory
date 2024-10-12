# PolicySnippetsListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**PolicySnippetsListByServiceDefaultResponseError**](PolicySnippetsListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_snippets_list_by_service_default_response import PolicySnippetsListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PolicySnippetsListByServiceDefaultResponse from a JSON string
policy_snippets_list_by_service_default_response_instance = PolicySnippetsListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(PolicySnippetsListByServiceDefaultResponse.to_json())

# convert the object into a dict
policy_snippets_list_by_service_default_response_dict = policy_snippets_list_by_service_default_response_instance.to_dict()
# create an instance of PolicySnippetsListByServiceDefaultResponse from a dict
policy_snippets_list_by_service_default_response_from_dict = PolicySnippetsListByServiceDefaultResponse.from_dict(policy_snippets_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


