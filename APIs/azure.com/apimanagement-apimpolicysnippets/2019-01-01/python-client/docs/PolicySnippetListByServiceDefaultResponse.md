# PolicySnippetListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**PolicySnippetListByServiceDefaultResponseError**](PolicySnippetListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_snippet_list_by_service_default_response import PolicySnippetListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PolicySnippetListByServiceDefaultResponse from a JSON string
policy_snippet_list_by_service_default_response_instance = PolicySnippetListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(PolicySnippetListByServiceDefaultResponse.to_json())

# convert the object into a dict
policy_snippet_list_by_service_default_response_dict = policy_snippet_list_by_service_default_response_instance.to_dict()
# create an instance of PolicySnippetListByServiceDefaultResponse from a dict
policy_snippet_list_by_service_default_response_from_dict = PolicySnippetListByServiceDefaultResponse.from_dict(policy_snippet_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


