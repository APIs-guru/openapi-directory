# ListPermittedScopesResponse

List of permitted Scopes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to request the next page of resources from the &#x60;ListPermittedScopes&#x60; method. The value of an empty string means that there are no more resources to return. | [optional] 
**scopes** | [**List[Scope]**](Scope.md) | The list of permitted Scopes | [optional] 

## Example

```python
from openapi_client.models.list_permitted_scopes_response import ListPermittedScopesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPermittedScopesResponse from a JSON string
list_permitted_scopes_response_instance = ListPermittedScopesResponse.from_json(json)
# print the JSON string representation of the object
print(ListPermittedScopesResponse.to_json())

# convert the object into a dict
list_permitted_scopes_response_dict = list_permitted_scopes_response_instance.to_dict()
# create an instance of ListPermittedScopesResponse from a dict
list_permitted_scopes_response_from_dict = ListPermittedScopesResponse.from_dict(list_permitted_scopes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


