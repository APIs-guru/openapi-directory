# ConnectorUnifiedApisInnerOauthScopesInner

OAuth scopes required for the connector. Add these scopes to your OAuth app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the OAuth scope. | [optional] 
**label** | **str** | Label of the OAuth scope. | [optional] 

## Example

```python
from openapi_client.models.connector_unified_apis_inner_oauth_scopes_inner import ConnectorUnifiedApisInnerOauthScopesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorUnifiedApisInnerOauthScopesInner from a JSON string
connector_unified_apis_inner_oauth_scopes_inner_instance = ConnectorUnifiedApisInnerOauthScopesInner.from_json(json)
# print the JSON string representation of the object
print(ConnectorUnifiedApisInnerOauthScopesInner.to_json())

# convert the object into a dict
connector_unified_apis_inner_oauth_scopes_inner_dict = connector_unified_apis_inner_oauth_scopes_inner_instance.to_dict()
# create an instance of ConnectorUnifiedApisInnerOauthScopesInner from a dict
connector_unified_apis_inner_oauth_scopes_inner_from_dict = ConnectorUnifiedApisInnerOauthScopesInner.from_dict(connector_unified_apis_inner_oauth_scopes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


