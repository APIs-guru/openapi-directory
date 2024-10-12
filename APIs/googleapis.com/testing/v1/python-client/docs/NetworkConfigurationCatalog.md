# NetworkConfigurationCatalog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configurations** | [**List[NetworkConfiguration]**](NetworkConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.network_configuration_catalog import NetworkConfigurationCatalog

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConfigurationCatalog from a JSON string
network_configuration_catalog_instance = NetworkConfigurationCatalog.from_json(json)
# print the JSON string representation of the object
print(NetworkConfigurationCatalog.to_json())

# convert the object into a dict
network_configuration_catalog_dict = network_configuration_catalog_instance.to_dict()
# create an instance of NetworkConfigurationCatalog from a dict
network_configuration_catalog_from_dict = NetworkConfigurationCatalog.from_dict(network_configuration_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


