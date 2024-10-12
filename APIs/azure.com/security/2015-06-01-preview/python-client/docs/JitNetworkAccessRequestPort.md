# JitNetworkAccessRequestPort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_source_address_prefix** | **str** | Mutually exclusive with the \&quot;allowedSourceAddressPrefixes\&quot; parameter. Should be an IP address or CIDR, for example \&quot;192.168.0.3\&quot; or \&quot;192.168.0.0/16\&quot;. | [optional] 
**allowed_source_address_prefixes** | **List[str]** | Mutually exclusive with the \&quot;allowedSourceAddressPrefix\&quot; parameter. | [optional] 
**end_time_utc** | **datetime** | The date &amp; time at which the request ends in UTC | 
**number** | **int** |  | 
**status** | **str** | The status of the port | 
**status_reason** | **str** | A description of why the &#x60;status&#x60; has its value | 

## Example

```python
from openapi_client.models.jit_network_access_request_port import JitNetworkAccessRequestPort

# TODO update the JSON string below
json = "{}"
# create an instance of JitNetworkAccessRequestPort from a JSON string
jit_network_access_request_port_instance = JitNetworkAccessRequestPort.from_json(json)
# print the JSON string representation of the object
print(JitNetworkAccessRequestPort.to_json())

# convert the object into a dict
jit_network_access_request_port_dict = jit_network_access_request_port_instance.to_dict()
# create an instance of JitNetworkAccessRequestPort from a dict
jit_network_access_request_port_from_dict = JitNetworkAccessRequestPort.from_dict(jit_network_access_request_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


