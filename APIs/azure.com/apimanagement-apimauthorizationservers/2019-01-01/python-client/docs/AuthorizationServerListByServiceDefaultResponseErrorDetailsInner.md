# AuthorizationServerListByServiceDefaultResponseErrorDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.authorization_server_list_by_service_default_response_error_details_inner import AuthorizationServerListByServiceDefaultResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationServerListByServiceDefaultResponseErrorDetailsInner from a JSON string
authorization_server_list_by_service_default_response_error_details_inner_instance = AuthorizationServerListByServiceDefaultResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(AuthorizationServerListByServiceDefaultResponseErrorDetailsInner.to_json())

# convert the object into a dict
authorization_server_list_by_service_default_response_error_details_inner_dict = authorization_server_list_by_service_default_response_error_details_inner_instance.to_dict()
# create an instance of AuthorizationServerListByServiceDefaultResponseErrorDetailsInner from a dict
authorization_server_list_by_service_default_response_error_details_inner_from_dict = AuthorizationServerListByServiceDefaultResponseErrorDetailsInner.from_dict(authorization_server_list_by_service_default_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


