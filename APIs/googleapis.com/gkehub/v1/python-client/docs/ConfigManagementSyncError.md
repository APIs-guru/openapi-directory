# ConfigManagementSyncError

An ACM created error representing a problem syncing configurations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | An ACM defined error code | [optional] 
**error_message** | **str** | A description of the error | [optional] 
**error_resources** | [**List[ConfigManagementErrorResource]**](ConfigManagementErrorResource.md) | A list of config(s) associated with the error, if any | [optional] 

## Example

```python
from openapi_client.models.config_management_sync_error import ConfigManagementSyncError

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementSyncError from a JSON string
config_management_sync_error_instance = ConfigManagementSyncError.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementSyncError.to_json())

# convert the object into a dict
config_management_sync_error_dict = config_management_sync_error_instance.to_dict()
# create an instance of ConfigManagementSyncError from a dict
config_management_sync_error_from_dict = ConfigManagementSyncError.from_dict(config_management_sync_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


