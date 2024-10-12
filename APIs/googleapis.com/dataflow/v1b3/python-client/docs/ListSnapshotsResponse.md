# ListSnapshotsResponse

List of snapshots.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snapshots** | [**List[Snapshot]**](Snapshot.md) | Returned snapshots. | [optional] 

## Example

```python
from openapi_client.models.list_snapshots_response import ListSnapshotsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSnapshotsResponse from a JSON string
list_snapshots_response_instance = ListSnapshotsResponse.from_json(json)
# print the JSON string representation of the object
print(ListSnapshotsResponse.to_json())

# convert the object into a dict
list_snapshots_response_dict = list_snapshots_response_instance.to_dict()
# create an instance of ListSnapshotsResponse from a dict
list_snapshots_response_from_dict = ListSnapshotsResponse.from_dict(list_snapshots_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


