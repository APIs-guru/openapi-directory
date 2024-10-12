# ProtocolConfiguration

Configuration of the protocol.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_configuration** | [**HTTPConfiguration**](HTTPConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.protocol_configuration import ProtocolConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ProtocolConfiguration from a JSON string
protocol_configuration_instance = ProtocolConfiguration.from_json(json)
# print the JSON string representation of the object
print(ProtocolConfiguration.to_json())

# convert the object into a dict
protocol_configuration_dict = protocol_configuration_instance.to_dict()
# create an instance of ProtocolConfiguration from a dict
protocol_configuration_from_dict = ProtocolConfiguration.from_dict(protocol_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


