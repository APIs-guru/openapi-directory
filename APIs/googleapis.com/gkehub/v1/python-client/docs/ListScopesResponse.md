# ListScopesResponse

List of Scopes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to request the next page of resources from the &#x60;ListScopes&#x60; method. The value of an empty string means that there are no more resources to return. | [optional] 
**scopes** | [**List[Scope]**](Scope.md) | The list of Scopes | [optional] 

## Example

```python
from openapi_client.models.list_scopes_response import ListScopesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListScopesResponse from a JSON string
list_scopes_response_instance = ListScopesResponse.from_json(json)
# print the JSON string representation of the object
print(ListScopesResponse.to_json())

# convert the object into a dict
list_scopes_response_dict = list_scopes_response_instance.to_dict()
# create an instance of ListScopesResponse from a dict
list_scopes_response_from_dict = ListScopesResponse.from_dict(list_scopes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


