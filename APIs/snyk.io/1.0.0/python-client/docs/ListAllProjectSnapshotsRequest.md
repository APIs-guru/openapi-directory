# ListAllProjectSnapshotsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**ListAllProjectSnapshotsRequestFilters**](ListAllProjectSnapshotsRequestFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_all_project_snapshots_request import ListAllProjectSnapshotsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllProjectSnapshotsRequest from a JSON string
list_all_project_snapshots_request_instance = ListAllProjectSnapshotsRequest.from_json(json)
# print the JSON string representation of the object
print(ListAllProjectSnapshotsRequest.to_json())

# convert the object into a dict
list_all_project_snapshots_request_dict = list_all_project_snapshots_request_instance.to_dict()
# create an instance of ListAllProjectSnapshotsRequest from a dict
list_all_project_snapshots_request_from_dict = ListAllProjectSnapshotsRequest.from_dict(list_all_project_snapshots_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


