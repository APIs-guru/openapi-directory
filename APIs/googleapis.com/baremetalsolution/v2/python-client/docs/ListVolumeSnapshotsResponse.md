# ListVolumeSnapshotsResponse

Response message containing the list of volume snapshots.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token identifying a page of results from the server. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 
**volume_snapshots** | [**List[VolumeSnapshot]**](VolumeSnapshot.md) | The list of snapshots. | [optional] 

## Example

```python
from openapi_client.models.list_volume_snapshots_response import ListVolumeSnapshotsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListVolumeSnapshotsResponse from a JSON string
list_volume_snapshots_response_instance = ListVolumeSnapshotsResponse.from_json(json)
# print the JSON string representation of the object
print(ListVolumeSnapshotsResponse.to_json())

# convert the object into a dict
list_volume_snapshots_response_dict = list_volume_snapshots_response_instance.to_dict()
# create an instance of ListVolumeSnapshotsResponse from a dict
list_volume_snapshots_response_from_dict = ListVolumeSnapshotsResponse.from_dict(list_volume_snapshots_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


