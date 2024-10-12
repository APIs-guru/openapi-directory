# SharedDriveInfo

The shared drives to search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shared_drive_ids** | **List[str]** | A list of shared drive IDs, as provided by the [Drive API](https://developers.google.com/drive). | [optional] 

## Example

```python
from openapi_client.models.shared_drive_info import SharedDriveInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SharedDriveInfo from a JSON string
shared_drive_info_instance = SharedDriveInfo.from_json(json)
# print the JSON string representation of the object
print(SharedDriveInfo.to_json())

# convert the object into a dict
shared_drive_info_dict = shared_drive_info_instance.to_dict()
# create an instance of SharedDriveInfo from a dict
shared_drive_info_from_dict = SharedDriveInfo.from_dict(shared_drive_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


