# VerificationIPFlowParameters

Parameters that define the IP flow to be verified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | [**Direction**](Direction.md) |  | 
**local_ip_address** | **str** | The local IP address. Acceptable values are valid IPv4 addresses. | 
**local_port** | **str** | The local port. Acceptable values are a single integer in the range (0-65535). Support for * for the source port, which depends on the direction. | 
**protocol** | **str** | Protocol to be verified on. | 
**remote_ip_address** | **str** | The remote IP address. Acceptable values are valid IPv4 addresses. | 
**remote_port** | **str** | The remote port. Acceptable values are a single integer in the range (0-65535). Support for * for the source port, which depends on the direction. | 
**target_nic_resource_id** | **str** | The NIC ID. (If VM has multiple NICs and IP forwarding is enabled on any of them, then this parameter must be specified. Otherwise optional). | [optional] 
**target_resource_id** | **str** | The ID of the target resource to perform next-hop on. | 

## Example

```python
from openapi_client.models.verification_ip_flow_parameters import VerificationIPFlowParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VerificationIPFlowParameters from a JSON string
verification_ip_flow_parameters_instance = VerificationIPFlowParameters.from_json(json)
# print the JSON string representation of the object
print(VerificationIPFlowParameters.to_json())

# convert the object into a dict
verification_ip_flow_parameters_dict = verification_ip_flow_parameters_instance.to_dict()
# create an instance of VerificationIPFlowParameters from a dict
verification_ip_flow_parameters_from_dict = VerificationIPFlowParameters.from_dict(verification_ip_flow_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


