# ListAllProjectSnapshots200ResponseSnapshotsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **str** | The date that the snapshot was taken | 
**id** | **str** | The snapshot identifier | 
**image_base_image** | **str** |  | [optional] 
**image_id** | **str** |  | [optional] 
**image_platform** | **str** |  | [optional] 
**image_tag** | **str** |  | [optional] 
**issue_counts** | [**ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCounts**](ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCounts.md) |  | 
**method** | **str** | The method by which this snapshot was created. | [optional] 
**total_dependencies** | **float** | Number of dependencies of the project | 

## Example

```python
from openapi_client.models.list_all_project_snapshots200_response_snapshots_inner import ListAllProjectSnapshots200ResponseSnapshotsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllProjectSnapshots200ResponseSnapshotsInner from a JSON string
list_all_project_snapshots200_response_snapshots_inner_instance = ListAllProjectSnapshots200ResponseSnapshotsInner.from_json(json)
# print the JSON string representation of the object
print(ListAllProjectSnapshots200ResponseSnapshotsInner.to_json())

# convert the object into a dict
list_all_project_snapshots200_response_snapshots_inner_dict = list_all_project_snapshots200_response_snapshots_inner_instance.to_dict()
# create an instance of ListAllProjectSnapshots200ResponseSnapshotsInner from a dict
list_all_project_snapshots200_response_snapshots_inner_from_dict = ListAllProjectSnapshots200ResponseSnapshotsInner.from_dict(list_all_project_snapshots200_response_snapshots_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


