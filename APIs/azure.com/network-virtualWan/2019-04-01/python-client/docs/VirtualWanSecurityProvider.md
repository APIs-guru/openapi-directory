# VirtualWanSecurityProvider

Collection of SecurityProviders.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the security provider. | [optional] 
**type** | [**VirtualWanSecurityProviderType**](VirtualWanSecurityProviderType.md) |  | [optional] 
**url** | **str** | Url of the security provider. | [optional] 

## Example

```python
from openapi_client.models.virtual_wan_security_provider import VirtualWanSecurityProvider

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualWanSecurityProvider from a JSON string
virtual_wan_security_provider_instance = VirtualWanSecurityProvider.from_json(json)
# print the JSON string representation of the object
print(VirtualWanSecurityProvider.to_json())

# convert the object into a dict
virtual_wan_security_provider_dict = virtual_wan_security_provider_instance.to_dict()
# create an instance of VirtualWanSecurityProvider from a dict
virtual_wan_security_provider_from_dict = VirtualWanSecurityProvider.from_dict(virtual_wan_security_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


