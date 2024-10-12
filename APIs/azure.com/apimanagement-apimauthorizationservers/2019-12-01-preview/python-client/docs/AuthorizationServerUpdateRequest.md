# AuthorizationServerUpdateRequest

External OAuth authorization server settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AuthorizationServerUpdateRequestProperties**](AuthorizationServerUpdateRequestProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.authorization_server_update_request import AuthorizationServerUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationServerUpdateRequest from a JSON string
authorization_server_update_request_instance = AuthorizationServerUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(AuthorizationServerUpdateRequest.to_json())

# convert the object into a dict
authorization_server_update_request_dict = authorization_server_update_request_instance.to_dict()
# create an instance of AuthorizationServerUpdateRequest from a dict
authorization_server_update_request_from_dict = AuthorizationServerUpdateRequest.from_dict(authorization_server_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


