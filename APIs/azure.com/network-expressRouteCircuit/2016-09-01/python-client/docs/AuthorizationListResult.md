# AuthorizationListResult

Response for ListAuthorizations API service call retrieves all authorizations that belongs to an ExpressRouteCircuit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[ExpressRouteCircuitAuthorization]**](ExpressRouteCircuitAuthorization.md) | The authorizations in an ExpressRoute Circuit. | [optional] 

## Example

```python
from openapi_client.models.authorization_list_result import AuthorizationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationListResult from a JSON string
authorization_list_result_instance = AuthorizationListResult.from_json(json)
# print the JSON string representation of the object
print(AuthorizationListResult.to_json())

# convert the object into a dict
authorization_list_result_dict = authorization_list_result_instance.to_dict()
# create an instance of AuthorizationListResult from a dict
authorization_list_result_from_dict = AuthorizationListResult.from_dict(authorization_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


