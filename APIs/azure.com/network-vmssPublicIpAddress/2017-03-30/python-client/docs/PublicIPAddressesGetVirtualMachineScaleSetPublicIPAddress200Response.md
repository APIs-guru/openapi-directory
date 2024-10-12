# PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddress200Response

Public IP address resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | **object** |  | [optional] 
**sku** | [**PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200ResponseValueInnerSku**](PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200ResponseValueInnerSku.md) |  | [optional] 
**zones** | **List[str]** | A list of availability zones denoting the IP allocated for the resource needs to come from. | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.public_ip_addresses_get_virtual_machine_scale_set_public_ip_address200_response import PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddress200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddress200Response from a JSON string
public_ip_addresses_get_virtual_machine_scale_set_public_ip_address200_response_instance = PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddress200Response.from_json(json)
# print the JSON string representation of the object
print(PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddress200Response.to_json())

# convert the object into a dict
public_ip_addresses_get_virtual_machine_scale_set_public_ip_address200_response_dict = public_ip_addresses_get_virtual_machine_scale_set_public_ip_address200_response_instance.to_dict()
# create an instance of PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddress200Response from a dict
public_ip_addresses_get_virtual_machine_scale_set_public_ip_address200_response_from_dict = PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddress200Response.from_dict(public_ip_addresses_get_virtual_machine_scale_set_public_ip_address200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


