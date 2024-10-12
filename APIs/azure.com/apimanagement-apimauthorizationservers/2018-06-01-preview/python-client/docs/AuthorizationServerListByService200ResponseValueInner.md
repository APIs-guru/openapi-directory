# AuthorizationServerListByService200ResponseValueInner

External OAuth authorization server settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AuthorizationServerListByService200ResponseValueInnerProperties**](AuthorizationServerListByService200ResponseValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.authorization_server_list_by_service200_response_value_inner import AuthorizationServerListByService200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationServerListByService200ResponseValueInner from a JSON string
authorization_server_list_by_service200_response_value_inner_instance = AuthorizationServerListByService200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(AuthorizationServerListByService200ResponseValueInner.to_json())

# convert the object into a dict
authorization_server_list_by_service200_response_value_inner_dict = authorization_server_list_by_service200_response_value_inner_instance.to_dict()
# create an instance of AuthorizationServerListByService200ResponseValueInner from a dict
authorization_server_list_by_service200_response_value_inner_from_dict = AuthorizationServerListByService200ResponseValueInner.from_dict(authorization_server_list_by_service200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


