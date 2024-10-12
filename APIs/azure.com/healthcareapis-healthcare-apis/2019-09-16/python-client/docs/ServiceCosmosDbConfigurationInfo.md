# ServiceCosmosDbConfigurationInfo

The settings for the Cosmos DB database backing the service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_throughput** | **int** | The provisioned throughput for the backing database. | [optional] 

## Example

```python
from openapi_client.models.service_cosmos_db_configuration_info import ServiceCosmosDbConfigurationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceCosmosDbConfigurationInfo from a JSON string
service_cosmos_db_configuration_info_instance = ServiceCosmosDbConfigurationInfo.from_json(json)
# print the JSON string representation of the object
print(ServiceCosmosDbConfigurationInfo.to_json())

# convert the object into a dict
service_cosmos_db_configuration_info_dict = service_cosmos_db_configuration_info_instance.to_dict()
# create an instance of ServiceCosmosDbConfigurationInfo from a dict
service_cosmos_db_configuration_info_from_dict = ServiceCosmosDbConfigurationInfo.from_dict(service_cosmos_db_configuration_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


