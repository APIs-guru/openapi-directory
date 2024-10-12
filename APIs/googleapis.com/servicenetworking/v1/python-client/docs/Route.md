# Route

Represents a route that was created or discovered by a private access management service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dest_range** | **str** | Destination CIDR range that this route applies to. | [optional] 
**name** | **str** | Route name. See https://cloud.google.com/vpc/docs/routes | [optional] 
**network** | **str** | Fully-qualified URL of the VPC network in the producer host tenant project that this route applies to. For example: &#x60;projects/123456/global/networks/host-network&#x60; | [optional] 
**next_hop_gateway** | **str** | Fully-qualified URL of the gateway that should handle matching packets that this route applies to. For example: &#x60;projects/123456/global/gateways/default-internet-gateway&#x60; | [optional] 

## Example

```python
from openapi_client.models.route import Route

# TODO update the JSON string below
json = "{}"
# create an instance of Route from a JSON string
route_instance = Route.from_json(json)
# print the JSON string representation of the object
print(Route.to_json())

# convert the object into a dict
route_dict = route_instance.to_dict()
# create an instance of Route from a dict
route_from_dict = Route.from_dict(route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


