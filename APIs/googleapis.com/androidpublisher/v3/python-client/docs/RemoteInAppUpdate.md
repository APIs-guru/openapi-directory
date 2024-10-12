# RemoteInAppUpdate

Object representation for Remote in-app update action type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_remote_in_app_update_requested** | **bool** | Required. Set to true if Remote In-App Update action type is needed. | [optional] 

## Example

```python
from openapi_client.models.remote_in_app_update import RemoteInAppUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteInAppUpdate from a JSON string
remote_in_app_update_instance = RemoteInAppUpdate.from_json(json)
# print the JSON string representation of the object
print(RemoteInAppUpdate.to_json())

# convert the object into a dict
remote_in_app_update_dict = remote_in_app_update_instance.to_dict()
# create an instance of RemoteInAppUpdate from a dict
remote_in_app_update_from_dict = RemoteInAppUpdate.from_dict(remote_in_app_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


