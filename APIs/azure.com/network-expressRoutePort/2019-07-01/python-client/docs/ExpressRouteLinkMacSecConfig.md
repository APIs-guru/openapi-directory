# ExpressRouteLinkMacSecConfig

ExpressRouteLink Mac Security Configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cak_secret_identifier** | **str** | Keyvault Secret Identifier URL containing Mac security CAK key. | [optional] 
**cipher** | **str** | Mac security cipher. | [optional] 
**ckn_secret_identifier** | **str** | Keyvault Secret Identifier URL containing Mac security CKN key. | [optional] 

## Example

```python
from openapi_client.models.express_route_link_mac_sec_config import ExpressRouteLinkMacSecConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteLinkMacSecConfig from a JSON string
express_route_link_mac_sec_config_instance = ExpressRouteLinkMacSecConfig.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteLinkMacSecConfig.to_json())

# convert the object into a dict
express_route_link_mac_sec_config_dict = express_route_link_mac_sec_config_instance.to_dict()
# create an instance of ExpressRouteLinkMacSecConfig from a dict
express_route_link_mac_sec_config_from_dict = ExpressRouteLinkMacSecConfig.from_dict(express_route_link_mac_sec_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


