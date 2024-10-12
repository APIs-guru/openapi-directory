# GoogleCloudApigeeV1EnvironmentConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addons_config** | [**GoogleCloudApigeeV1RuntimeAddonsConfig**](GoogleCloudApigeeV1RuntimeAddonsConfig.md) |  | [optional] 
**arc_config_location** | **str** | The location for the config blob of API Runtime Control, aka Envoy Adapter, for op-based authentication as a URI, e.g. a Cloud Storage URI. This is only used by Envoy-based gateways. | [optional] 
**create_time** | **str** | Time that the environment configuration was created. | [optional] 
**data_collectors** | [**List[GoogleCloudApigeeV1DataCollectorConfig]**](GoogleCloudApigeeV1DataCollectorConfig.md) | List of data collectors used by the deployments in the environment. | [optional] 
**debug_mask** | [**GoogleCloudApigeeV1DebugMask**](GoogleCloudApigeeV1DebugMask.md) |  | [optional] 
**deployment_groups** | [**List[GoogleCloudApigeeV1DeploymentGroupConfig]**](GoogleCloudApigeeV1DeploymentGroupConfig.md) | List of deployment groups in the environment. | [optional] 
**deployments** | [**List[GoogleCloudApigeeV1DeploymentConfig]**](GoogleCloudApigeeV1DeploymentConfig.md) | List of deployments in the environment. | [optional] 
**env_scoped_revision_id** | **str** | Revision ID for environment-scoped resources (e.g. target servers, keystores) in this config. This ID will increment any time a resource not scoped to a deployment group changes. | [optional] 
**feature_flags** | **Dict[str, str]** | Feature flags inherited from the organization and environment. | [optional] 
**flowhooks** | [**List[GoogleCloudApigeeV1FlowHookConfig]**](GoogleCloudApigeeV1FlowHookConfig.md) | List of flow hooks in the environment. | [optional] 
**forward_proxy_uri** | **str** | The forward proxy&#39;s url to be used by the runtime. When set, runtime will send requests to the target via the given forward proxy. This is only used by programmable gateways. | [optional] 
**gateway_config_location** | **str** | The location for the gateway config blob as a URI, e.g. a Cloud Storage URI. This is only used by Envoy-based gateways. | [optional] 
**keystores** | [**List[GoogleCloudApigeeV1KeystoreConfig]**](GoogleCloudApigeeV1KeystoreConfig.md) | List of keystores in the environment. | [optional] 
**name** | **str** | Name of the environment configuration in the following format: &#x60;organizations/{org}/environments/{env}/configs/{config}&#x60; | [optional] 
**provider** | **str** | Used by the Control plane to add context information to help detect the source of the document during diagnostics and debugging. | [optional] 
**pubsub_topic** | **str** | Name of the PubSub topic for the environment. | [optional] 
**resource_references** | [**List[GoogleCloudApigeeV1ReferenceConfig]**](GoogleCloudApigeeV1ReferenceConfig.md) | List of resource references in the environment. | [optional] 
**resources** | [**List[GoogleCloudApigeeV1ResourceConfig]**](GoogleCloudApigeeV1ResourceConfig.md) | List of resource versions in the environment. | [optional] 
**revision_id** | **str** | Revision ID of the environment configuration. The higher the value, the more recently the configuration was deployed. | [optional] 
**sequence_number** | **str** | DEPRECATED: Use revision_id. | [optional] 
**targets** | [**List[GoogleCloudApigeeV1TargetServerConfig]**](GoogleCloudApigeeV1TargetServerConfig.md) | List of target servers in the environment. Disabled target servers are not displayed. | [optional] 
**trace_config** | [**GoogleCloudApigeeV1RuntimeTraceConfig**](GoogleCloudApigeeV1RuntimeTraceConfig.md) |  | [optional] 
**uid** | **str** | Unique ID for the environment configuration. The ID will only change if the environment is deleted and recreated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_environment_config import GoogleCloudApigeeV1EnvironmentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1EnvironmentConfig from a JSON string
google_cloud_apigee_v1_environment_config_instance = GoogleCloudApigeeV1EnvironmentConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1EnvironmentConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_environment_config_dict = google_cloud_apigee_v1_environment_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1EnvironmentConfig from a dict
google_cloud_apigee_v1_environment_config_from_dict = GoogleCloudApigeeV1EnvironmentConfig.from_dict(google_cloud_apigee_v1_environment_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


