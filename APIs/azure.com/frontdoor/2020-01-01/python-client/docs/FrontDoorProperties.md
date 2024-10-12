# FrontDoorProperties

The JSON object that contains the properties required to create an endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cname** | **str** | The host that each frontendEndpoint must CNAME to. | [optional] [readonly] 
**frontdoor_id** | **str** | The Id of the frontdoor. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the Front Door. | [optional] [readonly] 
**resource_state** | [**ResourceState**](ResourceState.md) |  | [optional] 
**rules_engines** | [**List[RulesEngine]**](RulesEngine.md) | Rules Engine Configurations available to routing rules. | [optional] [readonly] 
**backend_pools** | [**List[BackendPool]**](BackendPool.md) | Backend pools available to routing rules. | [optional] 
**backend_pools_settings** | [**BackendPoolsSettings**](BackendPoolsSettings.md) |  | [optional] 
**enabled_state** | **str** | Operational status of the Front Door load balancer. Permitted values are &#39;Enabled&#39; or &#39;Disabled&#39; | [optional] 
**friendly_name** | **str** | A friendly name for the frontDoor | [optional] 
**frontend_endpoints** | [**List[FrontendEndpoint]**](FrontendEndpoint.md) | Frontend endpoints available to routing rules. | [optional] 
**health_probe_settings** | [**List[HealthProbeSettingsModel]**](HealthProbeSettingsModel.md) | Health probe settings associated with this Front Door instance. | [optional] 
**load_balancing_settings** | [**List[LoadBalancingSettingsModel]**](LoadBalancingSettingsModel.md) | Load balancing settings associated with this Front Door instance. | [optional] 
**routing_rules** | [**List[RoutingRule]**](RoutingRule.md) | Routing rules associated with this Front Door. | [optional] 

## Example

```python
from openapi_client.models.front_door_properties import FrontDoorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FrontDoorProperties from a JSON string
front_door_properties_instance = FrontDoorProperties.from_json(json)
# print the JSON string representation of the object
print(FrontDoorProperties.to_json())

# convert the object into a dict
front_door_properties_dict = front_door_properties_instance.to_dict()
# create an instance of FrontDoorProperties from a dict
front_door_properties_from_dict = FrontDoorProperties.from_dict(front_door_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


