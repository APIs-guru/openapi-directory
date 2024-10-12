# ProjectSnapshots


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snapshots** | [**List[ListAllProjectSnapshots200ResponseSnapshotsInner]**](ListAllProjectSnapshots200ResponseSnapshotsInner.md) | A list of the project&#39;s snapshots, ordered according to date (latest first). | [optional] 
**total** | **float** | The total number of results | [optional] 

## Example

```python
from openapi_client.models.project_snapshots import ProjectSnapshots

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectSnapshots from a JSON string
project_snapshots_instance = ProjectSnapshots.from_json(json)
# print the JSON string representation of the object
print(ProjectSnapshots.to_json())

# convert the object into a dict
project_snapshots_dict = project_snapshots_instance.to_dict()
# create an instance of ProjectSnapshots from a dict
project_snapshots_from_dict = ProjectSnapshots.from_dict(project_snapshots_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


