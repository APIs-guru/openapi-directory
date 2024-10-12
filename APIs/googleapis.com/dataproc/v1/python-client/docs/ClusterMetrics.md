# ClusterMetrics

Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hdfs_metrics** | **Dict[str, str]** | The HDFS metrics. | [optional] 
**yarn_metrics** | **Dict[str, str]** | YARN metrics. | [optional] 

## Example

```python
from openapi_client.models.cluster_metrics import ClusterMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterMetrics from a JSON string
cluster_metrics_instance = ClusterMetrics.from_json(json)
# print the JSON string representation of the object
print(ClusterMetrics.to_json())

# convert the object into a dict
cluster_metrics_dict = cluster_metrics_instance.to_dict()
# create an instance of ClusterMetrics from a dict
cluster_metrics_from_dict = ClusterMetrics.from_dict(cluster_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


