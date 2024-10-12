# WorkflowMetadata

A Dataproc workflow template resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_name** | **str** | Output only. The name of the target cluster. | [optional] [readonly] 
**cluster_uuid** | **str** | Output only. The UUID of target cluster. | [optional] [readonly] 
**create_cluster** | [**ClusterOperation**](ClusterOperation.md) |  | [optional] 
**dag_end_time** | **str** | Output only. DAG end time, only set for workflows with dag_timeout when DAG ends. | [optional] [readonly] 
**dag_start_time** | **str** | Output only. DAG start time, only set for workflows with dag_timeout when DAG begins. | [optional] [readonly] 
**dag_timeout** | **str** | Output only. The timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). | [optional] [readonly] 
**delete_cluster** | [**ClusterOperation**](ClusterOperation.md) |  | [optional] 
**end_time** | **str** | Output only. Workflow end time. | [optional] [readonly] 
**graph** | [**WorkflowGraph**](WorkflowGraph.md) |  | [optional] 
**parameters** | **Dict[str, str]** | Map from parameter names to values that were used for those parameters. | [optional] 
**start_time** | **str** | Output only. Workflow start time. | [optional] [readonly] 
**state** | **str** | Output only. The workflow state. | [optional] [readonly] 
**template** | **str** | Output only. The resource name of the workflow template as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} | [optional] [readonly] 
**version** | **int** | Output only. The version of template at the time of workflow instantiation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workflow_metadata import WorkflowMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowMetadata from a JSON string
workflow_metadata_instance = WorkflowMetadata.from_json(json)
# print the JSON string representation of the object
print(WorkflowMetadata.to_json())

# convert the object into a dict
workflow_metadata_dict = workflow_metadata_instance.to_dict()
# create an instance of WorkflowMetadata from a dict
workflow_metadata_from_dict = WorkflowMetadata.from_dict(workflow_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


