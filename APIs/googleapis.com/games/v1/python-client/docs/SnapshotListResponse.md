# SnapshotListResponse

A third party list snapshots response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Snapshot]**](Snapshot.md) | The snapshots. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#snapshotListResponse&#x60;. | [optional] 
**next_page_token** | **str** | Token corresponding to the next page of results. If there are no more results, the token is omitted. | [optional] 

## Example

```python
from openapi_client.models.snapshot_list_response import SnapshotListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotListResponse from a JSON string
snapshot_list_response_instance = SnapshotListResponse.from_json(json)
# print the JSON string representation of the object
print(SnapshotListResponse.to_json())

# convert the object into a dict
snapshot_list_response_dict = snapshot_list_response_instance.to_dict()
# create an instance of SnapshotListResponse from a dict
snapshot_list_response_from_dict = SnapshotListResponse.from_dict(snapshot_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


