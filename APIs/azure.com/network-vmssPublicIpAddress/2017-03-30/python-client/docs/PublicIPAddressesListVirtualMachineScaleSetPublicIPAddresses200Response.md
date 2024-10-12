# PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200Response

Response for ListPublicIpAddresses API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200ResponseValueInner]**](PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200ResponseValueInner.md) | A list of public IP addresses that exists in a resource group. | [optional] 

## Example

```python
from openapi_client.models.public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses200_response import PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200Response from a JSON string
public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses200_response_instance = PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200Response.from_json(json)
# print the JSON string representation of the object
print(PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200Response.to_json())

# convert the object into a dict
public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses200_response_dict = public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses200_response_instance.to_dict()
# create an instance of PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200Response from a dict
public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses200_response_from_dict = PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200Response.from_dict(public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


