# ClientDiscoveryForServiceSpecification

Class to represent shoebox service specification in json client discovery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_specifications** | [**List[ClientDiscoveryForLogSpecification]**](ClientDiscoveryForLogSpecification.md) | List of log specifications of this operation. | [optional] 

## Example

```python
from openapi_client.models.client_discovery_for_service_specification import ClientDiscoveryForServiceSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of ClientDiscoveryForServiceSpecification from a JSON string
client_discovery_for_service_specification_instance = ClientDiscoveryForServiceSpecification.from_json(json)
# print the JSON string representation of the object
print(ClientDiscoveryForServiceSpecification.to_json())

# convert the object into a dict
client_discovery_for_service_specification_dict = client_discovery_for_service_specification_instance.to_dict()
# create an instance of ClientDiscoveryForServiceSpecification from a dict
client_discovery_for_service_specification_from_dict = ClientDiscoveryForServiceSpecification.from_dict(client_discovery_for_service_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


