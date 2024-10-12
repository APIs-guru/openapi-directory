# NextHopParameters

Parameters that define the source and destination endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_ip_address** | **str** | The destination IP address. | 
**source_ip_address** | **str** | The source IP address. | 
**target_nic_resource_id** | **str** | The NIC ID. (If VM has multiple NICs and IP forwarding is enabled on any of the nics, then this parameter must be specified. Otherwise optional). | [optional] 
**target_resource_id** | **str** | The resource identifier of the target resource against which the action is to be performed. | 

## Example

```python
from openapi_client.models.next_hop_parameters import NextHopParameters

# TODO update the JSON string below
json = "{}"
# create an instance of NextHopParameters from a JSON string
next_hop_parameters_instance = NextHopParameters.from_json(json)
# print the JSON string representation of the object
print(NextHopParameters.to_json())

# convert the object into a dict
next_hop_parameters_dict = next_hop_parameters_instance.to_dict()
# create an instance of NextHopParameters from a dict
next_hop_parameters_from_dict = NextHopParameters.from_dict(next_hop_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


