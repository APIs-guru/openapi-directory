# ClustersConfigDump

Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_active_clusters** | [**List[DynamicCluster]**](DynamicCluster.md) | The dynamically loaded active clusters. These are clusters that are available to service data plane traffic. | [optional] 
**dynamic_warming_clusters** | [**List[DynamicCluster]**](DynamicCluster.md) | The dynamically loaded warming clusters. These are clusters that are currently undergoing warming in preparation to service data plane traffic. Note that if attempting to recreate an Envoy configuration from a configuration dump, the warming clusters should generally be discarded. | [optional] 
**static_clusters** | [**List[StaticCluster]**](StaticCluster.md) | The statically loaded cluster configs. | [optional] 
**version_info** | **str** | This is the :ref:&#x60;version_info &#x60; in the last processed CDS discovery response. If there are only static bootstrap clusters, this field will be \&quot;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.clusters_config_dump import ClustersConfigDump

# TODO update the JSON string below
json = "{}"
# create an instance of ClustersConfigDump from a JSON string
clusters_config_dump_instance = ClustersConfigDump.from_json(json)
# print the JSON string representation of the object
print(ClustersConfigDump.to_json())

# convert the object into a dict
clusters_config_dump_dict = clusters_config_dump_instance.to_dict()
# create an instance of ClustersConfigDump from a dict
clusters_config_dump_from_dict = ClustersConfigDump.from_dict(clusters_config_dump_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


