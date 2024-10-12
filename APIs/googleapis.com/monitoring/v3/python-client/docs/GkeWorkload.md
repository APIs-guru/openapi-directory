# GkeWorkload

A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_name** | **str** | The name of the parent cluster. | [optional] 
**location** | **str** | The location of the parent cluster. This may be a zone or region. | [optional] 
**namespace_name** | **str** | The name of the parent namespace. | [optional] 
**project_id** | **str** | Output only. The project this resource lives in. For legacy services migrated from the Custom type, this may be a distinct project from the one parenting the service itself. | [optional] [readonly] 
**top_level_controller_name** | **str** | The name of this workload. | [optional] 
**top_level_controller_type** | **str** | The type of this workload (for example, \&quot;Deployment\&quot; or \&quot;DaemonSet\&quot;) | [optional] 

## Example

```python
from openapi_client.models.gke_workload import GkeWorkload

# TODO update the JSON string below
json = "{}"
# create an instance of GkeWorkload from a JSON string
gke_workload_instance = GkeWorkload.from_json(json)
# print the JSON string representation of the object
print(GkeWorkload.to_json())

# convert the object into a dict
gke_workload_dict = gke_workload_instance.to_dict()
# create an instance of GkeWorkload from a dict
gke_workload_from_dict = GkeWorkload.from_dict(gke_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


