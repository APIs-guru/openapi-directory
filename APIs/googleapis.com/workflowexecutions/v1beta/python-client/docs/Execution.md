# Execution

A running instance of a [Workflow](/workflows/docs/reference/rest/v1beta/projects.locations.workflows).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**argument** | **str** | Input parameters of the execution represented as a JSON string. The size limit is 32KB. *Note*: If you are using the REST API directly to run your workflow, you must escape any JSON string value of &#x60;argument&#x60;. Example: &#x60;&#39;{\&quot;argument\&quot;:\&quot;{\\\&quot;firstName\\\&quot;:\\\&quot;FIRST\\\&quot;,\\\&quot;lastName\\\&quot;:\\\&quot;LAST\\\&quot;}\&quot;}&#39;&#x60; | [optional] 
**call_log_level** | **str** | The call logging level associated to this execution. | [optional] 
**end_time** | **str** | Output only. Marks the end of execution, successful or not. | [optional] [readonly] 
**error** | [**Error**](Error.md) |  | [optional] 
**name** | **str** | Output only. The resource name of the execution. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} | [optional] [readonly] 
**result** | **str** | Output only. Output of the execution represented as a JSON string. The value can only be present if the execution&#39;s state is &#x60;SUCCEEDED&#x60;. | [optional] [readonly] 
**start_time** | **str** | Output only. Marks the beginning of execution. | [optional] [readonly] 
**state** | **str** | Output only. Current state of the execution. | [optional] [readonly] 
**status** | [**Status**](Status.md) |  | [optional] 
**workflow_revision_id** | **str** | Output only. Revision of the workflow this execution is using. | [optional] [readonly] 

## Example

```python
from openapi_client.models.execution import Execution

# TODO update the JSON string below
json = "{}"
# create an instance of Execution from a JSON string
execution_instance = Execution.from_json(json)
# print the JSON string representation of the object
print(Execution.to_json())

# convert the object into a dict
execution_dict = execution_instance.to_dict()
# create an instance of Execution from a dict
execution_from_dict = Execution.from_dict(execution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


