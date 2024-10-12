# AuthorizationServerCollection

Paged OAuth2 Authorization Servers list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[OAuth2AuthorizationServerContract]**](OAuth2AuthorizationServerContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.authorization_server_collection import AuthorizationServerCollection

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationServerCollection from a JSON string
authorization_server_collection_instance = AuthorizationServerCollection.from_json(json)
# print the JSON string representation of the object
print(AuthorizationServerCollection.to_json())

# convert the object into a dict
authorization_server_collection_dict = authorization_server_collection_instance.to_dict()
# create an instance of AuthorizationServerCollection from a dict
authorization_server_collection_from_dict = AuthorizationServerCollection.from_dict(authorization_server_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


