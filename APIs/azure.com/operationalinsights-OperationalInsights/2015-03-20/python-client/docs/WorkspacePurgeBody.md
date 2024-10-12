# WorkspacePurgeBody

Describes the body of a purge request for an App Insights Workspace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**List[WorkspacePurgeBodyFilters]**](WorkspacePurgeBodyFilters.md) | The set of columns and filters (queries) to run over them to purge the resulting data. | 
**table** | **str** | Table from which to purge data. | 

## Example

```python
from openapi_client.models.workspace_purge_body import WorkspacePurgeBody

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspacePurgeBody from a JSON string
workspace_purge_body_instance = WorkspacePurgeBody.from_json(json)
# print the JSON string representation of the object
print(WorkspacePurgeBody.to_json())

# convert the object into a dict
workspace_purge_body_dict = workspace_purge_body_instance.to_dict()
# create an instance of WorkspacePurgeBody from a dict
workspace_purge_body_from_dict = WorkspacePurgeBody.from_dict(workspace_purge_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


