# ProjectSnapshotsFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**ListAllProjectSnapshotsRequestFilters**](ListAllProjectSnapshotsRequestFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.project_snapshots_filters import ProjectSnapshotsFilters

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectSnapshotsFilters from a JSON string
project_snapshots_filters_instance = ProjectSnapshotsFilters.from_json(json)
# print the JSON string representation of the object
print(ProjectSnapshotsFilters.to_json())

# convert the object into a dict
project_snapshots_filters_dict = project_snapshots_filters_instance.to_dict()
# create an instance of ProjectSnapshotsFilters from a dict
project_snapshots_filters_from_dict = ProjectSnapshotsFilters.from_dict(project_snapshots_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


