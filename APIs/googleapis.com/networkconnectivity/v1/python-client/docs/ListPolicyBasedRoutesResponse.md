# ListPolicyBasedRoutesResponse

Response for PolicyBasedRouting.ListPolicyBasedRoutes method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. | [optional] 
**policy_based_routes** | [**List[PolicyBasedRoute]**](PolicyBasedRoute.md) | Policy-based routes to be returned. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_policy_based_routes_response import ListPolicyBasedRoutesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPolicyBasedRoutesResponse from a JSON string
list_policy_based_routes_response_instance = ListPolicyBasedRoutesResponse.from_json(json)
# print the JSON string representation of the object
print(ListPolicyBasedRoutesResponse.to_json())

# convert the object into a dict
list_policy_based_routes_response_dict = list_policy_based_routes_response_instance.to_dict()
# create an instance of ListPolicyBasedRoutesResponse from a dict
list_policy_based_routes_response_from_dict = ListPolicyBasedRoutesResponse.from_dict(list_policy_based_routes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


