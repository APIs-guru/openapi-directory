# ListAllProjectSnapshotsRequestFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_id** | **str** | For container projects, filter by the ID of the image | [optional] 

## Example

```python
from openapi_client.models.list_all_project_snapshots_request_filters import ListAllProjectSnapshotsRequestFilters

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllProjectSnapshotsRequestFilters from a JSON string
list_all_project_snapshots_request_filters_instance = ListAllProjectSnapshotsRequestFilters.from_json(json)
# print the JSON string representation of the object
print(ListAllProjectSnapshotsRequestFilters.to_json())

# convert the object into a dict
list_all_project_snapshots_request_filters_dict = list_all_project_snapshots_request_filters_instance.to_dict()
# create an instance of ListAllProjectSnapshotsRequestFilters from a dict
list_all_project_snapshots_request_filters_from_dict = ListAllProjectSnapshotsRequestFilters.from_dict(list_all_project_snapshots_request_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


