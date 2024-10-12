# SaveAttemptSyncConfigRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_number** | **int** |  | 
**job_id** | **int** |  | 
**sync_config** | [**AttemptSyncConfig**](AttemptSyncConfig.md) |  | 

## Example

```python
from openapi_client.models.save_attempt_sync_config_request_body import SaveAttemptSyncConfigRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of SaveAttemptSyncConfigRequestBody from a JSON string
save_attempt_sync_config_request_body_instance = SaveAttemptSyncConfigRequestBody.from_json(json)
# print the JSON string representation of the object
print(SaveAttemptSyncConfigRequestBody.to_json())

# convert the object into a dict
save_attempt_sync_config_request_body_dict = save_attempt_sync_config_request_body_instance.to_dict()
# create an instance of SaveAttemptSyncConfigRequestBody from a dict
save_attempt_sync_config_request_body_from_dict = SaveAttemptSyncConfigRequestBody.from_dict(save_attempt_sync_config_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


