# DynamicEndpointConfig

[#next-free-field: 6]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_status** | **str** | The client status of this resource. [#not-implemented-hide:] | [optional] 
**endpoint_config** | **Dict[str, object]** | The endpoint config. | [optional] 
**error_state** | [**UpdateFailureState**](UpdateFailureState.md) |  | [optional] 
**last_updated** | **str** | [#not-implemented-hide:] The timestamp when the Endpoint was last updated. | [optional] 
**version_info** | **str** | [#not-implemented-hide:] This is the per-resource version information. This version is currently taken from the :ref:&#x60;version_info &#x60; field at the time that the endpoint configuration was loaded. | [optional] 

## Example

```python
from openapi_client.models.dynamic_endpoint_config import DynamicEndpointConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicEndpointConfig from a JSON string
dynamic_endpoint_config_instance = DynamicEndpointConfig.from_json(json)
# print the JSON string representation of the object
print(DynamicEndpointConfig.to_json())

# convert the object into a dict
dynamic_endpoint_config_dict = dynamic_endpoint_config_instance.to_dict()
# create an instance of DynamicEndpointConfig from a dict
dynamic_endpoint_config_from_dict = DynamicEndpointConfig.from_dict(dynamic_endpoint_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


