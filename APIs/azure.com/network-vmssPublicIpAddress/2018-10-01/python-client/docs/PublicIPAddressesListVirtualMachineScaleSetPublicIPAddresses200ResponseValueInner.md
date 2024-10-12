# PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200ResponseValueInner

Public IP address resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | **object** |  | [optional] 
**sku** | [**PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200ResponseValueInnerSku**](PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200ResponseValueInnerSku.md) |  | [optional] 
**zones** | **List[str]** | A list of availability zones denoting the IP allocated for the resource needs to come from. | [optional] 

## Example

```python
from openapi_client.models.public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses200_response_value_inner import PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200ResponseValueInner from a JSON string
public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses200_response_value_inner_instance = PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200ResponseValueInner.to_json())

# convert the object into a dict
public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses200_response_value_inner_dict = public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses200_response_value_inner_instance.to_dict()
# create an instance of PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200ResponseValueInner from a dict
public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses200_response_value_inner_from_dict = PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200ResponseValueInner.from_dict(public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


