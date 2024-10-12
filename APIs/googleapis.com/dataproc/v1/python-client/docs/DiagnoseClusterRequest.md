# DiagnoseClusterRequest

A request to collect cluster diagnostic information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**diagnosis_interval** | [**Interval**](Interval.md) |  | [optional] 
**job** | **str** | Optional. DEPRECATED Specifies the job on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job} | [optional] 
**jobs** | **List[str]** | Optional. Specifies a list of jobs on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job} | [optional] 
**tarball_access** | **str** | Optional. (Optional) The access type to the diagnostic tarball. If not specified, falls back to default access of the bucket | [optional] 
**tarball_gcs_dir** | **str** | Optional. (Optional) The output Cloud Storage directory for the diagnostic tarball. If not specified, a task-specific directory in the cluster&#39;s staging bucket will be used. | [optional] 
**yarn_application_id** | **str** | Optional. DEPRECATED Specifies the yarn application on which diagnosis is to be performed. | [optional] 
**yarn_application_ids** | **List[str]** | Optional. Specifies a list of yarn applications on which diagnosis is to be performed. | [optional] 

## Example

```python
from openapi_client.models.diagnose_cluster_request import DiagnoseClusterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnoseClusterRequest from a JSON string
diagnose_cluster_request_instance = DiagnoseClusterRequest.from_json(json)
# print the JSON string representation of the object
print(DiagnoseClusterRequest.to_json())

# convert the object into a dict
diagnose_cluster_request_dict = diagnose_cluster_request_instance.to_dict()
# create an instance of DiagnoseClusterRequest from a dict
diagnose_cluster_request_from_dict = DiagnoseClusterRequest.from_dict(diagnose_cluster_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


