# FrontDoorUpdateParameters

The properties needed to update a Front Door

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_pools** | [**List[BackendPool]**](BackendPool.md) | Backend pools available to routing rules. | [optional] 
**enabled_state** | **str** | Operational status of the Front Door load balancer. Permitted values are &#39;Enabled&#39; or &#39;Disabled&#39; | [optional] 
**friendly_name** | **str** | A friendly name for the frontDoor | [optional] 
**frontend_endpoints** | [**List[FrontendEndpoint]**](FrontendEndpoint.md) | Frontend endpoints available to routing rules. | [optional] 
**health_probe_settings** | [**List[HealthProbeSettingsModel]**](HealthProbeSettingsModel.md) | Health probe settings associated with this Front Door instance. | [optional] 
**load_balancing_settings** | [**List[LoadBalancingSettingsModel]**](LoadBalancingSettingsModel.md) | Load balancing settings associated with this Front Door instance. | [optional] 
**routing_rules** | [**List[RoutingRule]**](RoutingRule.md) | Routing rules associated with this Front Door. | [optional] 

## Example

```python
from openapi_client.models.front_door_update_parameters import FrontDoorUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of FrontDoorUpdateParameters from a JSON string
front_door_update_parameters_instance = FrontDoorUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(FrontDoorUpdateParameters.to_json())

# convert the object into a dict
front_door_update_parameters_dict = front_door_update_parameters_instance.to_dict()
# create an instance of FrontDoorUpdateParameters from a dict
front_door_update_parameters_from_dict = FrontDoorUpdateParameters.from_dict(front_door_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


