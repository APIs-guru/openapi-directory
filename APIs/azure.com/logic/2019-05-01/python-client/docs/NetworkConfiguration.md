# NetworkConfiguration

The network configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_endpoint** | [**IntegrationServiceEnvironmentAccessEndpoint**](IntegrationServiceEnvironmentAccessEndpoint.md) |  | [optional] 
**subnets** | [**List[ResourceReference]**](ResourceReference.md) | The subnets. | [optional] 
**virtual_network_address_space** | **str** | Gets the virtual network address space. | [optional] 

## Example

```python
from openapi_client.models.network_configuration import NetworkConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConfiguration from a JSON string
network_configuration_instance = NetworkConfiguration.from_json(json)
# print the JSON string representation of the object
print(NetworkConfiguration.to_json())

# convert the object into a dict
network_configuration_dict = network_configuration_instance.to_dict()
# create an instance of NetworkConfiguration from a dict
network_configuration_from_dict = NetworkConfiguration.from_dict(network_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


