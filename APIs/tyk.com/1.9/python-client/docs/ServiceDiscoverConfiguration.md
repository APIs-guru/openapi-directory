# ServiceDiscoverConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_timeout** | **float** |  | [optional] 
**data_path** | **str** |  | [optional] 
**endpoint_returns_list** | **bool** |  | [optional] 
**parent_data_path** | **str** |  | [optional] 
**port_data_path** | **str** |  | [optional] 
**query_endpoint** | **str** |  | [optional] 
**use_discovery_service** | **str** |  | [optional] 
**use_nested_query** | **bool** |  | [optional] 
**use_target_list** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.service_discover_configuration import ServiceDiscoverConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceDiscoverConfiguration from a JSON string
service_discover_configuration_instance = ServiceDiscoverConfiguration.from_json(json)
# print the JSON string representation of the object
print(ServiceDiscoverConfiguration.to_json())

# convert the object into a dict
service_discover_configuration_dict = service_discover_configuration_instance.to_dict()
# create an instance of ServiceDiscoverConfiguration from a dict
service_discover_configuration_from_dict = ServiceDiscoverConfiguration.from_dict(service_discover_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


