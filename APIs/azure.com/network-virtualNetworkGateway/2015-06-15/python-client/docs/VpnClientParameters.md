# VpnClientParameters

VpnClientParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processor_architecture** | **str** | VPN client Processor Architecture. Possible values are: &#39;AMD64&#39; and &#39;X86&#39;. | [optional] 

## Example

```python
from openapi_client.models.vpn_client_parameters import VpnClientParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VpnClientParameters from a JSON string
vpn_client_parameters_instance = VpnClientParameters.from_json(json)
# print the JSON string representation of the object
print(VpnClientParameters.to_json())

# convert the object into a dict
vpn_client_parameters_dict = vpn_client_parameters_instance.to_dict()
# create an instance of VpnClientParameters from a dict
vpn_client_parameters_from_dict = VpnClientParameters.from_dict(vpn_client_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


