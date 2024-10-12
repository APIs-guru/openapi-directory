# StaticEndpointConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_config** | **Dict[str, object]** | The endpoint config. | [optional] 
**last_updated** | **str** | [#not-implemented-hide:] The timestamp when the Endpoint was last updated. | [optional] 

## Example

```python
from openapi_client.models.static_endpoint_config import StaticEndpointConfig

# TODO update the JSON string below
json = "{}"
# create an instance of StaticEndpointConfig from a JSON string
static_endpoint_config_instance = StaticEndpointConfig.from_json(json)
# print the JSON string representation of the object
print(StaticEndpointConfig.to_json())

# convert the object into a dict
static_endpoint_config_dict = static_endpoint_config_instance.to_dict()
# create an instance of StaticEndpointConfig from a dict
static_endpoint_config_from_dict = StaticEndpointConfig.from_dict(static_endpoint_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


