# PreRestoreRequest

Pre Restore request object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_file_share_uri** | **str** | Pre Restore Azure file share uri. | [optional] 
**backup_metadata_property_bag** | **str** | Pre Restore backup metadata property bag. | [optional] 
**partition** | **str** | Pre Restore partition. | [optional] 
**pause_wait_for_sync_drain_time_period_in_seconds** | **int** | Pre Restore pause wait for sync drain time period in seconds. | [optional] 
**replica_group** | **str** | Pre Restore replica group. | [optional] 
**request_id** | **str** | Pre Restore request id. | [optional] 
**restore_file_spec** | [**List[RestoreFileSpec]**](RestoreFileSpec.md) | Pre Restore restore file spec array. | [optional] 
**source_azure_file_share_uri** | **str** | Pre Restore Azure source azure file share uri. | [optional] 
**status** | **str** | Pre Restore Azure status. | [optional] 

## Example

```python
from openapi_client.models.pre_restore_request import PreRestoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PreRestoreRequest from a JSON string
pre_restore_request_instance = PreRestoreRequest.from_json(json)
# print the JSON string representation of the object
print(PreRestoreRequest.to_json())

# convert the object into a dict
pre_restore_request_dict = pre_restore_request_instance.to_dict()
# create an instance of PreRestoreRequest from a dict
pre_restore_request_from_dict = PreRestoreRequest.from_dict(pre_restore_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


