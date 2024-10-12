# Hub

A Network Connectivity Center hub is a global management resource to which you attach spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the site-to-site data transfer feature, the resources associated with those spokes must all be in the same VPC network. Spokes that do not use site-to-site data transfer can be associated with any VPC network in your project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the hub was created. | [optional] [readonly] 
**description** | **str** | An optional description of the hub. | [optional] 
**labels** | **Dict[str, str]** | Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). | [optional] 
**name** | **str** | Immutable. The name of the hub. Hub names must be unique. They use the following form: &#x60;projects/{project_number}/locations/global/hubs/{hub_id}&#x60; | [optional] 
**route_tables** | **List[str]** | Output only. The route tables that belong to this hub. They use the following form: &#x60;projects/{project_number}/locations/global/hubs/{hub_id}/routeTables/{route_table_id}&#x60; This field is read-only. Network Connectivity Center automatically populates it based on the route tables nested under the hub. | [optional] [readonly] 
**routing_vpcs** | [**List[RoutingVPC]**](RoutingVPC.md) | The VPC networks associated with this hub&#39;s spokes. This field is read-only. Network Connectivity Center automatically populates it based on the set of spokes attached to the hub. | [optional] 
**spoke_summary** | [**SpokeSummary**](SpokeSummary.md) |  | [optional] 
**state** | **str** | Output only. The current lifecycle state of this hub. | [optional] [readonly] 
**unique_id** | **str** | Output only. The Google-generated UUID for the hub. This value is unique across all hub resources. If a hub is deleted and another with the same name is created, the new hub is assigned a different unique_id. | [optional] [readonly] 
**update_time** | **str** | Output only. The time the hub was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.hub import Hub

# TODO update the JSON string below
json = "{}"
# create an instance of Hub from a JSON string
hub_instance = Hub.from_json(json)
# print the JSON string representation of the object
print(Hub.to_json())

# convert the object into a dict
hub_dict = hub_instance.to_dict()
# create an instance of Hub from a dict
hub_from_dict = Hub.from_dict(hub_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


