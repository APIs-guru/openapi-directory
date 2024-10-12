# ProbePropertiesFormat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interval_in_seconds** | **int** | Gets or sets the interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5 | [optional] 
**load_balancing_rules** | [**List[SubResource]**](SubResource.md) | Gets Load balancer rules that use this probe | [optional] [readonly] 
**number_of_probes** | **int** | Gets or sets the number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.  | [optional] 
**port** | **int** | Gets or sets Port for communicating the probe. Possible values range from 1 to 65535, inclusive. | 
**protocol** | **str** | Gets or sets the protocol of the end point. Possible values are http or Tcp. If Tcp is specified, a received ACK is required for the probe to be successful. If http is specified,a 200 OK response from the specifies URI is required for the probe to be successful | 
**provisioning_state** | **str** | Gets provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 
**request_path** | **str** | Gets or sets the URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value | [optional] 

## Example

```python
from openapi_client.models.probe_properties_format import ProbePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ProbePropertiesFormat from a JSON string
probe_properties_format_instance = ProbePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ProbePropertiesFormat.to_json())

# convert the object into a dict
probe_properties_format_dict = probe_properties_format_instance.to_dict()
# create an instance of ProbePropertiesFormat from a dict
probe_properties_format_from_dict = ProbePropertiesFormat.from_dict(probe_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


