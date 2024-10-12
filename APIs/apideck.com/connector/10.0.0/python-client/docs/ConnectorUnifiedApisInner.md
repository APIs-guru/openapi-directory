# ConnectorUnifiedApisInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_only** | **bool** | Indicates whether a connector only supports authentication. In this case the connector is not mapped to a Unified API, but can be used with the Proxy API | [optional] [readonly] 
**downstream_unsupported_resources** | **List[str]** | List of resources that are not supported on the downstream. | [optional] 
**id** | [**UnifiedApiId**](UnifiedApiId.md) |  | [optional] 
**name** | **str** | Name of the API. | [optional] 
**oauth_scopes** | [**List[ConnectorUnifiedApisInnerOauthScopesInner]**](ConnectorUnifiedApisInnerOauthScopesInner.md) |  | [optional] 
**supported_events** | [**List[ConnectorEvent]**](ConnectorEvent.md) | List of events that are supported on the connector for this Unified API. | [optional] 
**supported_resources** | [**List[LinkedConnectorResource]**](LinkedConnectorResource.md) | List of resources that are supported on the connector. | [optional] 

## Example

```python
from openapi_client.models.connector_unified_apis_inner import ConnectorUnifiedApisInner

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorUnifiedApisInner from a JSON string
connector_unified_apis_inner_instance = ConnectorUnifiedApisInner.from_json(json)
# print the JSON string representation of the object
print(ConnectorUnifiedApisInner.to_json())

# convert the object into a dict
connector_unified_apis_inner_dict = connector_unified_apis_inner_instance.to_dict()
# create an instance of ConnectorUnifiedApisInner from a dict
connector_unified_apis_inner_from_dict = ConnectorUnifiedApisInner.from_dict(connector_unified_apis_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


