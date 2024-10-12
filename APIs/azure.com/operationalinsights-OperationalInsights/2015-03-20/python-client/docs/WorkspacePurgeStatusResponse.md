# WorkspacePurgeStatusResponse

Response containing status for a specific purge operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Status of the operation represented by the requested Id. | 

## Example

```python
from openapi_client.models.workspace_purge_status_response import WorkspacePurgeStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspacePurgeStatusResponse from a JSON string
workspace_purge_status_response_instance = WorkspacePurgeStatusResponse.from_json(json)
# print the JSON string representation of the object
print(WorkspacePurgeStatusResponse.to_json())

# convert the object into a dict
workspace_purge_status_response_dict = workspace_purge_status_response_instance.to_dict()
# create an instance of WorkspacePurgeStatusResponse from a dict
workspace_purge_status_response_from_dict = WorkspacePurgeStatusResponse.from_dict(workspace_purge_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


