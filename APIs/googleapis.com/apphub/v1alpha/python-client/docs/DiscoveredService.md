# DiscoveredService

DiscoveredService is a network/api interface that exposes some functionality to clients for consumption over the network. A discovered service can be registered to a App Hub service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Identifier. The resource name of the discovered service. Format: \&quot;projects/{host-project-id}/locations/{location}/discoveredServices/{uuid}\&quot;\&quot; | [optional] 
**service_properties** | [**ServiceProperties**](ServiceProperties.md) |  | [optional] 
**service_reference** | [**ServiceReference**](ServiceReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.discovered_service import DiscoveredService

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveredService from a JSON string
discovered_service_instance = DiscoveredService.from_json(json)
# print the JSON string representation of the object
print(DiscoveredService.to_json())

# convert the object into a dict
discovered_service_dict = discovered_service_instance.to_dict()
# create an instance of DiscoveredService from a dict
discovered_service_from_dict = DiscoveredService.from_dict(discovered_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


