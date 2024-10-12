# ExtensionEndpointConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hdr** | **object** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.extension_endpoint_config import ExtensionEndpointConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionEndpointConfig from a JSON string
extension_endpoint_config_instance = ExtensionEndpointConfig.from_json(json)
# print the JSON string representation of the object
print(ExtensionEndpointConfig.to_json())

# convert the object into a dict
extension_endpoint_config_dict = extension_endpoint_config_instance.to_dict()
# create an instance of ExtensionEndpointConfig from a dict
extension_endpoint_config_from_dict = ExtensionEndpointConfig.from_dict(extension_endpoint_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


