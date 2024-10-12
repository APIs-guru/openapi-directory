# CreateNetworkStaticRouteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway_ip** | **str** | The gateway IP (next hop) of the static route | 
**name** | **str** | The name of the new static route | 
**subnet** | **str** | The subnet of the static route | 

## Example

```python
from openapi_client.models.create_network_static_route_request import CreateNetworkStaticRouteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkStaticRouteRequest from a JSON string
create_network_static_route_request_instance = CreateNetworkStaticRouteRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkStaticRouteRequest.to_json())

# convert the object into a dict
create_network_static_route_request_dict = create_network_static_route_request_instance.to_dict()
# create an instance of CreateNetworkStaticRouteRequest from a dict
create_network_static_route_request_from_dict = CreateNetworkStaticRouteRequest.from_dict(create_network_static_route_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


