# NetworkMapping

Network Mapping model. Ideally it should have been possible to inherit this class from prev version in InheritedModels as long as there is no difference in structure or method signature. Since there were no base Models for certain fields and methods viz NetworkMappingProperties and Load with required return type, the class has been introduced in its entirety with references to base models to facilitate extensions in subsequent versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**NetworkMappingProperties**](NetworkMappingProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_mapping import NetworkMapping

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkMapping from a JSON string
network_mapping_instance = NetworkMapping.from_json(json)
# print the JSON string representation of the object
print(NetworkMapping.to_json())

# convert the object into a dict
network_mapping_dict = network_mapping_instance.to_dict()
# create an instance of NetworkMapping from a dict
network_mapping_from_dict = NetworkMapping.from_dict(network_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


