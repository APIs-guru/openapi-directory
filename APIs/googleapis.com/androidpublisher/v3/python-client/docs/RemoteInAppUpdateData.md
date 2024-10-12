# RemoteInAppUpdateData

Data related to Remote In-App Update action such as recovered user count, affected user count etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remote_app_update_data_per_bundle** | [**List[RemoteInAppUpdateDataPerBundle]**](RemoteInAppUpdateDataPerBundle.md) | Data related to the recovery action at bundle level. | [optional] 

## Example

```python
from openapi_client.models.remote_in_app_update_data import RemoteInAppUpdateData

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteInAppUpdateData from a JSON string
remote_in_app_update_data_instance = RemoteInAppUpdateData.from_json(json)
# print the JSON string representation of the object
print(RemoteInAppUpdateData.to_json())

# convert the object into a dict
remote_in_app_update_data_dict = remote_in_app_update_data_instance.to_dict()
# create an instance of RemoteInAppUpdateData from a dict
remote_in_app_update_data_from_dict = RemoteInAppUpdateData.from_dict(remote_in_app_update_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


