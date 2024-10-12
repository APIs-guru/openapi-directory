# GoogleCloudApigeeV1OptimizedStatsNode

Encapsulates a data node as represented below: ``` { \"identifier\": { \"names\": [ \"apiproxy\" ], \"values\": [ \"sirjee\" ] }, \"metric\": [ { \"env\": \"prod\", \"name\": \"sum(message_count)\", \"values\": [ 36.0 ] } ] }``` or ``` { \"env\": \"prod\", \"name\": \"sum(message_count)\", \"values\": [ 36.0 ] }``` Depending on whether a dimension is present in the query or not the data node type can be a simple metric value or dimension identifier with list of metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **List[object]** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_optimized_stats_node import GoogleCloudApigeeV1OptimizedStatsNode

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1OptimizedStatsNode from a JSON string
google_cloud_apigee_v1_optimized_stats_node_instance = GoogleCloudApigeeV1OptimizedStatsNode.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1OptimizedStatsNode.to_json())

# convert the object into a dict
google_cloud_apigee_v1_optimized_stats_node_dict = google_cloud_apigee_v1_optimized_stats_node_instance.to_dict()
# create an instance of GoogleCloudApigeeV1OptimizedStatsNode from a dict
google_cloud_apigee_v1_optimized_stats_node_from_dict = GoogleCloudApigeeV1OptimizedStatsNode.from_dict(google_cloud_apigee_v1_optimized_stats_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


