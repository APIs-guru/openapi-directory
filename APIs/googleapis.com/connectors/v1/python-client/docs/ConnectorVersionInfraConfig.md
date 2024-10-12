# ConnectorVersionInfraConfig

This cofiguration provides infra configs like rate limit threshold which need to be configurable for every connector version

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_ratelimit_window_seconds** | **str** | Output only. The window used for ratelimiting runtime requests to connections. | [optional] [readonly] 
**deployment_model** | **str** | Optional. Indicates whether connector is deployed on GKE/CloudRun | [optional] 
**hpa_config** | [**HPAConfig**](HPAConfig.md) |  | [optional] 
**internalclient_ratelimit_threshold** | **str** | Output only. Max QPS supported for internal requests originating from Connd. | [optional] [readonly] 
**ratelimit_threshold** | **str** | Output only. Max QPS supported by the connector version before throttling of requests. | [optional] [readonly] 
**resource_limits** | [**ResourceLimits**](ResourceLimits.md) |  | [optional] 
**resource_requests** | [**ResourceRequests**](ResourceRequests.md) |  | [optional] 
**shared_deployment** | **str** | Output only. The name of shared connector deployment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connector_version_infra_config import ConnectorVersionInfraConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorVersionInfraConfig from a JSON string
connector_version_infra_config_instance = ConnectorVersionInfraConfig.from_json(json)
# print the JSON string representation of the object
print(ConnectorVersionInfraConfig.to_json())

# convert the object into a dict
connector_version_infra_config_dict = connector_version_infra_config_instance.to_dict()
# create an instance of ConnectorVersionInfraConfig from a dict
connector_version_infra_config_from_dict = ConnectorVersionInfraConfig.from_dict(connector_version_infra_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


