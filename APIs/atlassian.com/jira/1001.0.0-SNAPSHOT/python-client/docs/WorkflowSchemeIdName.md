# WorkflowSchemeIdName

The ID and the name of the workflow scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the workflow scheme. | 
**name** | **str** | The name of the workflow scheme. | 

## Example

```python
from openapi_client.models.workflow_scheme_id_name import WorkflowSchemeIdName

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowSchemeIdName from a JSON string
workflow_scheme_id_name_instance = WorkflowSchemeIdName.from_json(json)
# print the JSON string representation of the object
print(WorkflowSchemeIdName.to_json())

# convert the object into a dict
workflow_scheme_id_name_dict = workflow_scheme_id_name_instance.to_dict()
# create an instance of WorkflowSchemeIdName from a dict
workflow_scheme_id_name_from_dict = WorkflowSchemeIdName.from_dict(workflow_scheme_id_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


