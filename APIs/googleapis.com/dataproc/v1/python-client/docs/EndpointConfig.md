# EndpointConfig

Endpoint config for this cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_http_port_access** | **bool** | Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to false. | [optional] 
**http_ports** | **Dict[str, str]** | Output only. The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true. | [optional] [readonly] 

## Example

```python
from openapi_client.models.endpoint_config import EndpointConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointConfig from a JSON string
endpoint_config_instance = EndpointConfig.from_json(json)
# print the JSON string representation of the object
print(EndpointConfig.to_json())

# convert the object into a dict
endpoint_config_dict = endpoint_config_instance.to_dict()
# create an instance of EndpointConfig from a dict
endpoint_config_from_dict = EndpointConfig.from_dict(endpoint_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


