# EndpointInfo

For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_ip** | **str** | Destination IP address. | [optional] 
**destination_network_uri** | **str** | URI of the network where this packet is sent to. | [optional] 
**destination_port** | **int** | Destination port. Only valid when protocol is TCP or UDP. | [optional] 
**protocol** | **str** | IP protocol in string format, for example: \&quot;TCP\&quot;, \&quot;UDP\&quot;, \&quot;ICMP\&quot;. | [optional] 
**source_agent_uri** | **str** | URI of the source telemetry agent this packet originates from. | [optional] 
**source_ip** | **str** | Source IP address. | [optional] 
**source_network_uri** | **str** | URI of the network where this packet originates from. | [optional] 
**source_port** | **int** | Source port. Only valid when protocol is TCP or UDP. | [optional] 

## Example

```python
from openapi_client.models.endpoint_info import EndpointInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointInfo from a JSON string
endpoint_info_instance = EndpointInfo.from_json(json)
# print the JSON string representation of the object
print(EndpointInfo.to_json())

# convert the object into a dict
endpoint_info_dict = endpoint_info_instance.to_dict()
# create an instance of EndpointInfo from a dict
endpoint_info_from_dict = EndpointInfo.from_dict(endpoint_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


