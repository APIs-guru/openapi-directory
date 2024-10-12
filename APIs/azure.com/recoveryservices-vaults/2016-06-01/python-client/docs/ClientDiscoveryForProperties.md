# ClientDiscoveryForProperties

Class to represent shoebox properties in json client discovery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_specification** | [**ClientDiscoveryForServiceSpecification**](ClientDiscoveryForServiceSpecification.md) |  | [optional] 

## Example

```python
from openapi_client.models.client_discovery_for_properties import ClientDiscoveryForProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ClientDiscoveryForProperties from a JSON string
client_discovery_for_properties_instance = ClientDiscoveryForProperties.from_json(json)
# print the JSON string representation of the object
print(ClientDiscoveryForProperties.to_json())

# convert the object into a dict
client_discovery_for_properties_dict = client_discovery_for_properties_instance.to_dict()
# create an instance of ClientDiscoveryForProperties from a dict
client_discovery_for_properties_from_dict = ClientDiscoveryForProperties.from_dict(client_discovery_for_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


