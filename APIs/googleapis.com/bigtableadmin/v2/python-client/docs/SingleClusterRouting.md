# SingleClusterRouting

Unconditionally routes all read/write requests to a specific cluster. This option preserves read-your-writes consistency but does not improve availability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_transactional_writes** | **bool** | Whether or not &#x60;CheckAndMutateRow&#x60; and &#x60;ReadModifyWriteRow&#x60; requests are allowed by this app profile. It is unsafe to send these requests to the same table/row/column in multiple clusters. | [optional] 
**cluster_id** | **str** | The cluster to which read/write requests should be routed. | [optional] 

## Example

```python
from openapi_client.models.single_cluster_routing import SingleClusterRouting

# TODO update the JSON string below
json = "{}"
# create an instance of SingleClusterRouting from a JSON string
single_cluster_routing_instance = SingleClusterRouting.from_json(json)
# print the JSON string representation of the object
print(SingleClusterRouting.to_json())

# convert the object into a dict
single_cluster_routing_dict = single_cluster_routing_instance.to_dict()
# create an instance of SingleClusterRouting from a dict
single_cluster_routing_from_dict = SingleClusterRouting.from_dict(single_cluster_routing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


