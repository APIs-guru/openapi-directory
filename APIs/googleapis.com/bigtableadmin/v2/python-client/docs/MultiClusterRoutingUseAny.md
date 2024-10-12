# MultiClusterRoutingUseAny

Read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes consistency to improve availability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_ids** | **List[str]** | The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible. | [optional] 

## Example

```python
from openapi_client.models.multi_cluster_routing_use_any import MultiClusterRoutingUseAny

# TODO update the JSON string below
json = "{}"
# create an instance of MultiClusterRoutingUseAny from a JSON string
multi_cluster_routing_use_any_instance = MultiClusterRoutingUseAny.from_json(json)
# print the JSON string representation of the object
print(MultiClusterRoutingUseAny.to_json())

# convert the object into a dict
multi_cluster_routing_use_any_dict = multi_cluster_routing_use_any_instance.to_dict()
# create an instance of MultiClusterRoutingUseAny from a dict
multi_cluster_routing_use_any_from_dict = MultiClusterRoutingUseAny.from_dict(multi_cluster_routing_use_any_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


