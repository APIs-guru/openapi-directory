# InboundEndpoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_port** | **int** |  | 
**frontend_port** | **int** |  | 
**name** | **str** |  | 
**protocol** | [**InboundEndpointProtocol**](InboundEndpointProtocol.md) |  | 
**public_fqdn** | **str** |  | 
**public_ip_address** | **str** |  | 

## Example

```python
from openapi_client.models.inbound_endpoint import InboundEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of InboundEndpoint from a JSON string
inbound_endpoint_instance = InboundEndpoint.from_json(json)
# print the JSON string representation of the object
print(InboundEndpoint.to_json())

# convert the object into a dict
inbound_endpoint_dict = inbound_endpoint_instance.to_dict()
# create an instance of InboundEndpoint from a dict
inbound_endpoint_from_dict = InboundEndpoint.from_dict(inbound_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


