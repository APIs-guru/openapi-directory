# VmxNetworkDevicesClaimRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **str** | The size of the vMX you claim. It can be one of: small, medium, large, 100 | 

## Example

```python
from openapi_client.models.vmx_network_devices_claim_request import VmxNetworkDevicesClaimRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VmxNetworkDevicesClaimRequest from a JSON string
vmx_network_devices_claim_request_instance = VmxNetworkDevicesClaimRequest.from_json(json)
# print the JSON string representation of the object
print(VmxNetworkDevicesClaimRequest.to_json())

# convert the object into a dict
vmx_network_devices_claim_request_dict = vmx_network_devices_claim_request_instance.to_dict()
# create an instance of VmxNetworkDevicesClaimRequest from a dict
vmx_network_devices_claim_request_from_dict = VmxNetworkDevicesClaimRequest.from_dict(vmx_network_devices_claim_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


