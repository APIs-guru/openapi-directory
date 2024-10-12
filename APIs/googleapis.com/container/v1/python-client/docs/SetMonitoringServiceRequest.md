# SetMonitoringServiceRequest

SetMonitoringServiceRequest sets the monitoring service of a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. | [optional] 
**monitoring_service** | **str** | Required. The monitoring service the cluster should use to write metrics. Currently available options: * \&quot;monitoring.googleapis.com/kubernetes\&quot; - The Cloud Monitoring service with a Kubernetes-native resource model * &#x60;monitoring.googleapis.com&#x60; - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * &#x60;none&#x60; - No metrics will be exported from the cluster. If left as an empty string,&#x60;monitoring.googleapis.com/kubernetes&#x60; will be used for GKE 1.14+ or &#x60;monitoring.googleapis.com&#x60; for earlier versions. | [optional] 
**name** | **str** | The name (project, location, cluster) of the cluster to set monitoring. Specified in the format &#x60;projects/*/locations/*/clusters/*&#x60;. | [optional] 
**project_id** | **str** | Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. | [optional] 
**zone** | **str** | Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. | [optional] 

## Example

```python
from openapi_client.models.set_monitoring_service_request import SetMonitoringServiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetMonitoringServiceRequest from a JSON string
set_monitoring_service_request_instance = SetMonitoringServiceRequest.from_json(json)
# print the JSON string representation of the object
print(SetMonitoringServiceRequest.to_json())

# convert the object into a dict
set_monitoring_service_request_dict = set_monitoring_service_request_instance.to_dict()
# create an instance of SetMonitoringServiceRequest from a dict
set_monitoring_service_request_from_dict = SetMonitoringServiceRequest.from_dict(set_monitoring_service_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


