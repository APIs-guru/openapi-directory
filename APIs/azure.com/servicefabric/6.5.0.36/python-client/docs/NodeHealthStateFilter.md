# NodeHealthStateFilter

Defines matching criteria to determine whether a node should be included in the returned cluster health chunk. One filter can match zero, one or multiple nodes, depending on its properties. Can be specified in the cluster health chunk query description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_state_filter** | **int** | The filter for the health state of the nodes. It allows selecting nodes if they match the desired health states. The possible values are integer value of one of the following health states. Only nodes that match the filter are returned. All nodes are used to evaluate the cluster aggregated health state. If not specified, default value is None, unless the node name is specified. If the filter has default value and node name is specified, the matching node is returned. The state values are flag-based enumeration, so the value could be a combination of these values obtained using bitwise &#39;OR&#39; operator. For example, if the provided value is 6, it matches nodes with HealthState value of OK (2) and Warning (4).  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535. | [optional] 
**node_name_filter** | **str** | Name of the node that matches the filter. The filter is applied only to the specified node, if it exists. If the node doesn&#39;t exist, no node is returned in the cluster health chunk based on this filter. If the node exists, it is included in the cluster health chunk if the health state matches the other filter properties. If not specified, all nodes that match the parent filters (if any) are taken into consideration and matched against the other filter members, like health state filter. | [optional] 

## Example

```python
from openapi_client.models.node_health_state_filter import NodeHealthStateFilter

# TODO update the JSON string below
json = "{}"
# create an instance of NodeHealthStateFilter from a JSON string
node_health_state_filter_instance = NodeHealthStateFilter.from_json(json)
# print the JSON string representation of the object
print(NodeHealthStateFilter.to_json())

# convert the object into a dict
node_health_state_filter_dict = node_health_state_filter_instance.to_dict()
# create an instance of NodeHealthStateFilter from a dict
node_health_state_filter_from_dict = NodeHealthStateFilter.from_dict(node_health_state_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


