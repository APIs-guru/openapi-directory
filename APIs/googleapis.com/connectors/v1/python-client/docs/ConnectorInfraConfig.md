# ConnectorInfraConfig

This cofiguration provides infra configs like rate limit threshold which need to be configurable for every connector version

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_ratelimit_window_seconds** | **str** | The window used for ratelimiting runtime requests to connections. | [optional] 
**deployment_model** | **str** | Indicate whether connector is deployed on GKE/CloudRun | [optional] 
**hpa_config** | [**HPAConfig**](HPAConfig.md) |  | [optional] 
**internalclient_ratelimit_threshold** | **str** | Max QPS supported for internal requests originating from Connd. | [optional] 
**ratelimit_threshold** | **str** | Max QPS supported by the connector version before throttling of requests. | [optional] 
**resource_limits** | [**ResourceLimits**](ResourceLimits.md) |  | [optional] 
**resource_requests** | [**ResourceRequests**](ResourceRequests.md) |  | [optional] 
**shared_deployment** | **str** | The name of shared connector deployment. | [optional] 

## Example

```python
from openapi_client.models.connector_infra_config import ConnectorInfraConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorInfraConfig from a JSON string
connector_infra_config_instance = ConnectorInfraConfig.from_json(json)
# print the JSON string representation of the object
print(ConnectorInfraConfig.to_json())

# convert the object into a dict
connector_infra_config_dict = connector_infra_config_instance.to_dict()
# create an instance of ConnectorInfraConfig from a dict
connector_infra_config_from_dict = ConnectorInfraConfig.from_dict(connector_infra_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


