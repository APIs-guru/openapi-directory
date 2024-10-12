# EndpointsConfigDump

Envoy's admin fill this message with all currently known endpoints. Endpoint configuration information can be used to recreate an Envoy configuration by populating all endpoints as static endpoints or by returning them in an EDS response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_endpoint_configs** | [**List[DynamicEndpointConfig]**](DynamicEndpointConfig.md) | The dynamically loaded endpoint configs. | [optional] 
**static_endpoint_configs** | [**List[StaticEndpointConfig]**](StaticEndpointConfig.md) | The statically loaded endpoint configs. | [optional] 

## Example

```python
from openapi_client.models.endpoints_config_dump import EndpointsConfigDump

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointsConfigDump from a JSON string
endpoints_config_dump_instance = EndpointsConfigDump.from_json(json)
# print the JSON string representation of the object
print(EndpointsConfigDump.to_json())

# convert the object into a dict
endpoints_config_dump_dict = endpoints_config_dump_instance.to_dict()
# create an instance of EndpointsConfigDump from a dict
endpoints_config_dump_from_dict = EndpointsConfigDump.from_dict(endpoints_config_dump_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


