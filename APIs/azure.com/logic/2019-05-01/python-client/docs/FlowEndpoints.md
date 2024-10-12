# FlowEndpoints

The flow endpoints configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_endpoint_ip_addresses** | [**List[IpAddress]**](IpAddress.md) | The access endpoint ip address. | [optional] 
**outgoing_ip_addresses** | [**List[IpAddress]**](IpAddress.md) | The outgoing ip address. | [optional] 

## Example

```python
from openapi_client.models.flow_endpoints import FlowEndpoints

# TODO update the JSON string below
json = "{}"
# create an instance of FlowEndpoints from a JSON string
flow_endpoints_instance = FlowEndpoints.from_json(json)
# print the JSON string representation of the object
print(FlowEndpoints.to_json())

# convert the object into a dict
flow_endpoints_dict = flow_endpoints_instance.to_dict()
# create an instance of FlowEndpoints from a dict
flow_endpoints_from_dict = FlowEndpoints.from_dict(flow_endpoints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


