# ClusterMonitoringResponse

The Operations Management Suite (OMS) status response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_monitoring_enabled** | **bool** | The status of the Operations Management Suite (OMS) on the HDInsight cluster. | [optional] 
**workspace_id** | **str** | The workspace ID of the Operations Management Suite (OMS) on the HDInsight cluster. | [optional] 

## Example

```python
from openapi_client.models.cluster_monitoring_response import ClusterMonitoringResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterMonitoringResponse from a JSON string
cluster_monitoring_response_instance = ClusterMonitoringResponse.from_json(json)
# print the JSON string representation of the object
print(ClusterMonitoringResponse.to_json())

# convert the object into a dict
cluster_monitoring_response_dict = cluster_monitoring_response_instance.to_dict()
# create an instance of ClusterMonitoringResponse from a dict
cluster_monitoring_response_from_dict = ClusterMonitoringResponse.from_dict(cluster_monitoring_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


