# RemoteLockEvent

The device or profile has been remotely locked via the LOCK command.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_package_name** | **str** | Package name of the admin app requesting the change. | [optional] 
**admin_user_id** | **int** | User ID of the admin app from the which the change was requested. | [optional] 
**target_user_id** | **int** | User ID in which the change was requested in. | [optional] 

## Example

```python
from openapi_client.models.remote_lock_event import RemoteLockEvent

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteLockEvent from a JSON string
remote_lock_event_instance = RemoteLockEvent.from_json(json)
# print the JSON string representation of the object
print(RemoteLockEvent.to_json())

# convert the object into a dict
remote_lock_event_dict = remote_lock_event_instance.to_dict()
# create an instance of RemoteLockEvent from a dict
remote_lock_event_from_dict = RemoteLockEvent.from_dict(remote_lock_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


