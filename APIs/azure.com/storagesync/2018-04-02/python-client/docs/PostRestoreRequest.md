# PostRestoreRequest

Post Restore Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_file_share_uri** | **str** | Post Restore Azure file share uri. | [optional] 
**failed_file_list** | **str** | Post Restore Azure failed file list. | [optional] 
**partition** | **str** | Post Restore partition. | [optional] 
**replica_group** | **str** | Post Restore replica group. | [optional] 
**request_id** | **str** | Post Restore request id. | [optional] 
**restore_file_spec** | [**List[RestoreFileSpec]**](RestoreFileSpec.md) | Post Restore restore file spec array. | [optional] 
**source_azure_file_share_uri** | **str** | Post Restore Azure source azure file share uri. | [optional] 
**status** | **str** | Post Restore Azure status. | [optional] 

## Example

```python
from openapi_client.models.post_restore_request import PostRestoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostRestoreRequest from a JSON string
post_restore_request_instance = PostRestoreRequest.from_json(json)
# print the JSON string representation of the object
print(PostRestoreRequest.to_json())

# convert the object into a dict
post_restore_request_dict = post_restore_request_instance.to_dict()
# create an instance of PostRestoreRequest from a dict
post_restore_request_from_dict = PostRestoreRequest.from_dict(post_restore_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


