# AuthorizationServersGetDefaultResponseDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.authorization_servers_get_default_response_details_inner import AuthorizationServersGetDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationServersGetDefaultResponseDetailsInner from a JSON string
authorization_servers_get_default_response_details_inner_instance = AuthorizationServersGetDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(AuthorizationServersGetDefaultResponseDetailsInner.to_json())

# convert the object into a dict
authorization_servers_get_default_response_details_inner_dict = authorization_servers_get_default_response_details_inner_instance.to_dict()
# create an instance of AuthorizationServersGetDefaultResponseDetailsInner from a dict
authorization_servers_get_default_response_details_inner_from_dict = AuthorizationServersGetDefaultResponseDetailsInner.from_dict(authorization_servers_get_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


