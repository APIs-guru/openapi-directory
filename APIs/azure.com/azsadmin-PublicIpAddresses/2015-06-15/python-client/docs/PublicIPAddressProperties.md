# PublicIPAddressProperties

Properties of a public IP Address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocation_method** | **str** | The allocation method. | [optional] 
**ip_address** | **str** | The IP address. | [optional] 
**ip_pool** | **str** | The IP pool. | [optional] 
**provisioning_state** | **str** | The provisioning state. | [optional] [readonly] 
**subscription_id** | **str** | The subscription ID. | [optional] [readonly] 
**tenant_resource_uri** | **str** | The tenant resource URI. | [optional] [readonly] 

## Example

```python
from openapi_client.models.public_ip_address_properties import PublicIPAddressProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIPAddressProperties from a JSON string
public_ip_address_properties_instance = PublicIPAddressProperties.from_json(json)
# print the JSON string representation of the object
print(PublicIPAddressProperties.to_json())

# convert the object into a dict
public_ip_address_properties_dict = public_ip_address_properties_instance.to_dict()
# create an instance of PublicIPAddressProperties from a dict
public_ip_address_properties_from_dict = PublicIPAddressProperties.from_dict(public_ip_address_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


