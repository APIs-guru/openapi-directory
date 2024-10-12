# ClusterHealthReport

The report of the cluster health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**var_property** | **str** |  | [optional] 
**remove_when_expired** | **bool** |  | [optional] 
**sequence_number** | **str** |  | [optional] 
**source_id** | **str** |  | [optional] 
**time_to_live_in_milli_seconds** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cluster_health_report import ClusterHealthReport

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterHealthReport from a JSON string
cluster_health_report_instance = ClusterHealthReport.from_json(json)
# print the JSON string representation of the object
print(ClusterHealthReport.to_json())

# convert the object into a dict
cluster_health_report_dict = cluster_health_report_instance.to_dict()
# create an instance of ClusterHealthReport from a dict
cluster_health_report_from_dict = ClusterHealthReport.from_dict(cluster_health_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


