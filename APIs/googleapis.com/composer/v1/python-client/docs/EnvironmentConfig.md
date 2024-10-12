# EnvironmentConfig

Configuration information for an environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airflow_byoid_uri** | **str** | Output only. The &#39;bring your own identity&#39; variant of the URI of the Apache Airflow Web UI hosted within this environment, to be accessed with external identities using workforce identity federation (see [Access environments with workforce identity federation](/composer/docs/composer-2/access-environments-with-workforce-identity-federation)). | [optional] [readonly] 
**airflow_uri** | **str** | Output only. The URI of the Apache Airflow Web UI hosted within this environment (see [Airflow web interface](/composer/docs/how-to/accessing/airflow-web-interface)). | [optional] 
**dag_gcs_prefix** | **str** | Output only. The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using \&quot;/\&quot;-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with the given prefix. | [optional] 
**data_retention_config** | [**DataRetentionConfig**](DataRetentionConfig.md) |  | [optional] 
**database_config** | [**DatabaseConfig**](DatabaseConfig.md) |  | [optional] 
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**environment_size** | **str** | Optional. The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. | [optional] 
**gke_cluster** | **str** | Output only. The Kubernetes Engine cluster used to run this environment. | [optional] 
**maintenance_window** | [**MaintenanceWindow**](MaintenanceWindow.md) |  | [optional] 
**master_authorized_networks_config** | [**MasterAuthorizedNetworksConfig**](MasterAuthorizedNetworksConfig.md) |  | [optional] 
**node_config** | [**NodeConfig**](NodeConfig.md) |  | [optional] 
**node_count** | **int** | The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. | [optional] 
**private_environment_config** | [**PrivateEnvironmentConfig**](PrivateEnvironmentConfig.md) |  | [optional] 
**recovery_config** | [**RecoveryConfig**](RecoveryConfig.md) |  | [optional] 
**resilience_mode** | **str** | Optional. Resilience mode of the Cloud Composer Environment. This field is supported for Cloud Composer environments in versions composer-2.2.0-airflow-*.*.* and newer. | [optional] 
**software_config** | [**SoftwareConfig**](SoftwareConfig.md) |  | [optional] 
**web_server_config** | [**WebServerConfig**](WebServerConfig.md) |  | [optional] 
**web_server_network_access_control** | [**WebServerNetworkAccessControl**](WebServerNetworkAccessControl.md) |  | [optional] 
**workloads_config** | [**WorkloadsConfig**](WorkloadsConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.environment_config import EnvironmentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentConfig from a JSON string
environment_config_instance = EnvironmentConfig.from_json(json)
# print the JSON string representation of the object
print(EnvironmentConfig.to_json())

# convert the object into a dict
environment_config_dict = environment_config_instance.to_dict()
# create an instance of EnvironmentConfig from a dict
environment_config_from_dict = EnvironmentConfig.from_dict(environment_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


