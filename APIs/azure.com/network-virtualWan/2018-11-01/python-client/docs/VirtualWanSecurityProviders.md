# VirtualWanSecurityProviders

Collection of SecurityProviders.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supported_providers** | [**List[VirtualWanSecurityProvider]**](VirtualWanSecurityProvider.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_wan_security_providers import VirtualWanSecurityProviders

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualWanSecurityProviders from a JSON string
virtual_wan_security_providers_instance = VirtualWanSecurityProviders.from_json(json)
# print the JSON string representation of the object
print(VirtualWanSecurityProviders.to_json())

# convert the object into a dict
virtual_wan_security_providers_dict = virtual_wan_security_providers_instance.to_dict()
# create an instance of VirtualWanSecurityProviders from a dict
virtual_wan_security_providers_from_dict = VirtualWanSecurityProviders.from_dict(virtual_wan_security_providers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


