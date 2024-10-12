# Step

A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abort** | [**AbortInfo**](AbortInfo.md) |  | [optional] 
**app_engine_version** | [**AppEngineVersionInfo**](AppEngineVersionInfo.md) |  | [optional] 
**causes_drop** | **bool** | This is a step that leads to the final state Drop. | [optional] 
**cloud_function** | [**CloudFunctionInfo**](CloudFunctionInfo.md) |  | [optional] 
**cloud_run_revision** | [**CloudRunRevisionInfo**](CloudRunRevisionInfo.md) |  | [optional] 
**cloud_sql_instance** | [**CloudSQLInstanceInfo**](CloudSQLInstanceInfo.md) |  | [optional] 
**deliver** | [**DeliverInfo**](DeliverInfo.md) |  | [optional] 
**description** | **str** | A description of the step. Usually this is a summary of the state. | [optional] 
**drop** | [**DropInfo**](DropInfo.md) |  | [optional] 
**endpoint** | [**EndpointInfo**](EndpointInfo.md) |  | [optional] 
**firewall** | [**FirewallInfo**](FirewallInfo.md) |  | [optional] 
**forward** | [**ForwardInfo**](ForwardInfo.md) |  | [optional] 
**forwarding_rule** | [**ForwardingRuleInfo**](ForwardingRuleInfo.md) |  | [optional] 
**gke_master** | [**GKEMasterInfo**](GKEMasterInfo.md) |  | [optional] 
**google_service** | [**GoogleServiceInfo**](GoogleServiceInfo.md) |  | [optional] 
**instance** | [**InstanceInfo**](InstanceInfo.md) |  | [optional] 
**load_balancer** | [**LoadBalancerInfo**](LoadBalancerInfo.md) |  | [optional] 
**load_balancer_backend_info** | [**LoadBalancerBackendInfo**](LoadBalancerBackendInfo.md) |  | [optional] 
**nat** | [**NatInfo**](NatInfo.md) |  | [optional] 
**network** | [**NetworkInfo**](NetworkInfo.md) |  | [optional] 
**project_id** | **str** | Project ID that contains the configuration this step is validating. | [optional] 
**proxy_connection** | [**ProxyConnectionInfo**](ProxyConnectionInfo.md) |  | [optional] 
**route** | [**RouteInfo**](RouteInfo.md) |  | [optional] 
**state** | **str** | Each step is in one of the pre-defined states. | [optional] 
**storage_bucket** | [**StorageBucketInfo**](StorageBucketInfo.md) |  | [optional] 
**vpc_connector** | [**VpcConnectorInfo**](VpcConnectorInfo.md) |  | [optional] 
**vpn_gateway** | [**VpnGatewayInfo**](VpnGatewayInfo.md) |  | [optional] 
**vpn_tunnel** | [**VpnTunnelInfo**](VpnTunnelInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.step import Step

# TODO update the JSON string below
json = "{}"
# create an instance of Step from a JSON string
step_instance = Step.from_json(json)
# print the JSON string representation of the object
print(Step.to_json())

# convert the object into a dict
step_dict = step_instance.to_dict()
# create an instance of Step from a dict
step_from_dict = Step.from_dict(step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


