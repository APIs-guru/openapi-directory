# ListAllProjectSnapshotIssuePaths200ResponseLinks

Onward links from this record

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last** | **str** | The URL of the last page of paths for the issue | [optional] 
**next** | **str** | The URL of the next page of paths for the issue, if not on the last page | [optional] 
**prev** | **str** | The URL of the previous page of paths for the issue, if not on the first page | [optional] 

## Example

```python
from openapi_client.models.list_all_project_snapshot_issue_paths200_response_links import ListAllProjectSnapshotIssuePaths200ResponseLinks

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllProjectSnapshotIssuePaths200ResponseLinks from a JSON string
list_all_project_snapshot_issue_paths200_response_links_instance = ListAllProjectSnapshotIssuePaths200ResponseLinks.from_json(json)
# print the JSON string representation of the object
print(ListAllProjectSnapshotIssuePaths200ResponseLinks.to_json())

# convert the object into a dict
list_all_project_snapshot_issue_paths200_response_links_dict = list_all_project_snapshot_issue_paths200_response_links_instance.to_dict()
# create an instance of ListAllProjectSnapshotIssuePaths200ResponseLinks from a dict
list_all_project_snapshot_issue_paths200_response_links_from_dict = ListAllProjectSnapshotIssuePaths200ResponseLinks.from_dict(list_all_project_snapshot_issue_paths200_response_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


