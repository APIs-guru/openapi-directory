# OperationalizationClusterCredentials

Credentials to resources in the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_insights** | [**AppInsightsCredentials**](AppInsightsCredentials.md) |  | [optional] 
**container_registry** | [**ContainerRegistryCredentials**](ContainerRegistryCredentials.md) |  | [optional] 
**container_service** | [**ContainerServiceCredentials**](ContainerServiceCredentials.md) |  | [optional] 
**service_auth_configuration** | [**ServiceAuthConfiguration**](ServiceAuthConfiguration.md) |  | [optional] 
**ssl_configuration** | [**SslConfiguration**](SslConfiguration.md) |  | [optional] 
**storage_account** | [**StorageAccountCredentials**](StorageAccountCredentials.md) |  | [optional] 

## Example

```python
from openapi_client.models.operationalization_cluster_credentials import OperationalizationClusterCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of OperationalizationClusterCredentials from a JSON string
operationalization_cluster_credentials_instance = OperationalizationClusterCredentials.from_json(json)
# print the JSON string representation of the object
print(OperationalizationClusterCredentials.to_json())

# convert the object into a dict
operationalization_cluster_credentials_dict = operationalization_cluster_credentials_instance.to_dict()
# create an instance of OperationalizationClusterCredentials from a dict
operationalization_cluster_credentials_from_dict = OperationalizationClusterCredentials.from_dict(operationalization_cluster_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


