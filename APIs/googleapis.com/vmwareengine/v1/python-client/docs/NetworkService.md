# NetworkService

Represents a network service that is managed by a `NetworkPolicy` resource. A network service provides a way to control an aspect of external access to VMware workloads. For example, whether the VMware workloads in the private clouds governed by a network policy can access or be accessed from the internet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | True if the service is enabled; false otherwise. | [optional] 
**state** | **str** | Output only. State of the service. New values may be added to this enum when appropriate. | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_service import NetworkService

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkService from a JSON string
network_service_instance = NetworkService.from_json(json)
# print the JSON string representation of the object
print(NetworkService.to_json())

# convert the object into a dict
network_service_dict = network_service_instance.to_dict()
# create an instance of NetworkService from a dict
network_service_from_dict = NetworkService.from_dict(network_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


