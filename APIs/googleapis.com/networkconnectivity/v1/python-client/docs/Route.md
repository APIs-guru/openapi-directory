# Route

A route defines a path from VM instances within a spoke to a specific destination resource. Only VPC spokes have routes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the route was created. | [optional] [readonly] 
**description** | **str** | An optional description of the route. | [optional] 
**ip_cidr_range** | **str** | The destination IP address range. | [optional] 
**labels** | **Dict[str, str]** | Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). | [optional] 
**location** | **str** | Output only. The location of the route. Uses the following form: \&quot;projects/{project}/locations/{location}\&quot; Example: projects/1234/locations/us-central1 | [optional] [readonly] 
**name** | **str** | Immutable. The name of the route. Route names must be unique. Route names use the following form: &#x60;projects/{project_number}/locations/global/hubs/{hub}/routeTables/{route_table_id}/routes/{route_id}&#x60; | [optional] 
**next_hop_vpc_network** | [**NextHopVpcNetwork**](NextHopVpcNetwork.md) |  | [optional] 
**spoke** | **str** | Immutable. The spoke that this route leads to. Example: projects/12345/locations/global/spokes/SPOKE | [optional] 
**state** | **str** | Output only. The current lifecycle state of the route. | [optional] [readonly] 
**type** | **str** | Output only. The route&#39;s type. Its type is determined by the properties of its IP address range. | [optional] [readonly] 
**uid** | **str** | Output only. The Google-generated UUID for the route. This value is unique across all Network Connectivity Center route resources. If a route is deleted and another with the same name is created, the new route is assigned a different &#x60;uid&#x60;. | [optional] [readonly] 
**update_time** | **str** | Output only. The time the route was last updated. | [optional] [readonly] 

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


