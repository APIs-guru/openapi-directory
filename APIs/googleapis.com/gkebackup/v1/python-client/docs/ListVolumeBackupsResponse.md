# ListVolumeBackupsResponse

Response message for ListVolumeBackups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token which may be sent as page_token in a subsequent &#x60;ListVolumeBackups&#x60; call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. | [optional] 
**volume_backups** | [**List[VolumeBackup]**](VolumeBackup.md) | The list of VolumeBackups matching the given criteria. | [optional] 

## Example

```python
from openapi_client.models.list_volume_backups_response import ListVolumeBackupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListVolumeBackupsResponse from a JSON string
list_volume_backups_response_instance = ListVolumeBackupsResponse.from_json(json)
# print the JSON string representation of the object
print(ListVolumeBackupsResponse.to_json())

# convert the object into a dict
list_volume_backups_response_dict = list_volume_backups_response_instance.to_dict()
# create an instance of ListVolumeBackupsResponse from a dict
list_volume_backups_response_from_dict = ListVolumeBackupsResponse.from_dict(list_volume_backups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


