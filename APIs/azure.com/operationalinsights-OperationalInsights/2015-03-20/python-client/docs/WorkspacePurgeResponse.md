# WorkspacePurgeResponse

Response containing operationId for a specific purge action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_id** | **str** | Id to use when querying for status for a particular purge operation. | 

## Example

```python
from openapi_client.models.workspace_purge_response import WorkspacePurgeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspacePurgeResponse from a JSON string
workspace_purge_response_instance = WorkspacePurgeResponse.from_json(json)
# print the JSON string representation of the object
print(WorkspacePurgeResponse.to_json())

# convert the object into a dict
workspace_purge_response_dict = workspace_purge_response_instance.to_dict()
# create an instance of WorkspacePurgeResponse from a dict
workspace_purge_response_from_dict = WorkspacePurgeResponse.from_dict(workspace_purge_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


