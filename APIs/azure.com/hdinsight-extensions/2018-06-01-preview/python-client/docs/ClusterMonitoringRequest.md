# ClusterMonitoringRequest

The Operations Management Suite (OMS) parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_key** | **str** | The Operations Management Suite (OMS) workspace key. | [optional] 
**workspace_id** | **str** | The Operations Management Suite (OMS) workspace ID. | [optional] 

## Example

```python
from openapi_client.models.cluster_monitoring_request import ClusterMonitoringRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterMonitoringRequest from a JSON string
cluster_monitoring_request_instance = ClusterMonitoringRequest.from_json(json)
# print the JSON string representation of the object
print(ClusterMonitoringRequest.to_json())

# convert the object into a dict
cluster_monitoring_request_dict = cluster_monitoring_request_instance.to_dict()
# create an instance of ClusterMonitoringRequest from a dict
cluster_monitoring_request_from_dict = ClusterMonitoringRequest.from_dict(cluster_monitoring_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


