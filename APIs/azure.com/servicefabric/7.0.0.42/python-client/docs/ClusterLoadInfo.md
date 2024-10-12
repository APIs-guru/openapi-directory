# ClusterLoadInfo

Information about load in a Service Fabric cluster. It holds a summary of all metrics and their load in a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_balancing_end_time_utc** | **datetime** | The end time of last resource balancing run. | [optional] 
**last_balancing_start_time_utc** | **datetime** | The starting time of last resource balancing run. | [optional] 
**load_metric_information** | [**List[LoadMetricInformation]**](LoadMetricInformation.md) | List that contains metrics and their load information in this cluster. | [optional] 

## Example

```python
from openapi_client.models.cluster_load_info import ClusterLoadInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterLoadInfo from a JSON string
cluster_load_info_instance = ClusterLoadInfo.from_json(json)
# print the JSON string representation of the object
print(ClusterLoadInfo.to_json())

# convert the object into a dict
cluster_load_info_dict = cluster_load_info_instance.to_dict()
# create an instance of ClusterLoadInfo from a dict
cluster_load_info_from_dict = ClusterLoadInfo.from_dict(cluster_load_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


