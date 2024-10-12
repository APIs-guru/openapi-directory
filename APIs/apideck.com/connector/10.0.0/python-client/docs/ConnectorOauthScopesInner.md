# ConnectorOauthScopesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_apis** | **List[str]** | List of Unified APIs that request this OAuth Scope by default. Application owners can customize the requested scopes. | [optional] 
**id** | **str** | ID of the OAuth scope. | [optional] 
**label** | **str** | Label of the OAuth scope. | [optional] 

## Example

```python
from openapi_client.models.connector_oauth_scopes_inner import ConnectorOauthScopesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorOauthScopesInner from a JSON string
connector_oauth_scopes_inner_instance = ConnectorOauthScopesInner.from_json(json)
# print the JSON string representation of the object
print(ConnectorOauthScopesInner.to_json())

# convert the object into a dict
connector_oauth_scopes_inner_dict = connector_oauth_scopes_inner_instance.to_dict()
# create an instance of ConnectorOauthScopesInner from a dict
connector_oauth_scopes_inner_from_dict = ConnectorOauthScopesInner.from_dict(connector_oauth_scopes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


