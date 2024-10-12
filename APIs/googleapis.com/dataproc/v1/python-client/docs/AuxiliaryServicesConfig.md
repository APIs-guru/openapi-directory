# AuxiliaryServicesConfig

Auxiliary services configuration for a Cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metastore_config** | [**MetastoreConfig**](MetastoreConfig.md) |  | [optional] 
**spark_history_server_config** | [**SparkHistoryServerConfig**](SparkHistoryServerConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.auxiliary_services_config import AuxiliaryServicesConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AuxiliaryServicesConfig from a JSON string
auxiliary_services_config_instance = AuxiliaryServicesConfig.from_json(json)
# print the JSON string representation of the object
print(AuxiliaryServicesConfig.to_json())

# convert the object into a dict
auxiliary_services_config_dict = auxiliary_services_config_instance.to_dict()
# create an instance of AuxiliaryServicesConfig from a dict
auxiliary_services_config_from_dict = AuxiliaryServicesConfig.from_dict(auxiliary_services_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


