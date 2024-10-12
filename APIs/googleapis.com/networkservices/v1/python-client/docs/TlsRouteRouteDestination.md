# TlsRouteRouteDestination

Describe the destination for traffic to be routed to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_name** | **str** | Required. The URL of a BackendService to route traffic to. | [optional] 
**weight** | **int** | Optional. Specifies the proportion of requests forwareded to the backend referenced by the service_name field. This is computed as: - weight/Sum(weights in destinations) Weights in all destinations does not need to sum up to 100. | [optional] 

## Example

```python
from openapi_client.models.tls_route_route_destination import TlsRouteRouteDestination

# TODO update the JSON string below
json = "{}"
# create an instance of TlsRouteRouteDestination from a JSON string
tls_route_route_destination_instance = TlsRouteRouteDestination.from_json(json)
# print the JSON string representation of the object
print(TlsRouteRouteDestination.to_json())

# convert the object into a dict
tls_route_route_destination_dict = tls_route_route_destination_instance.to_dict()
# create an instance of TlsRouteRouteDestination from a dict
tls_route_route_destination_from_dict = TlsRouteRouteDestination.from_dict(tls_route_route_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


