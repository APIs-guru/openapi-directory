# ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCounts

Number of known vulnerabilities in the project, not including ignored issues

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**license** | [**ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCountsLicense**](ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCountsLicense.md) |  | [optional] 
**sast** | [**ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCountsLicense**](ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCountsLicense.md) |  | [optional] 
**vuln** | [**ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCountsLicense**](ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCountsLicense.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_all_project_snapshots200_response_snapshots_inner_issue_counts import ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCounts

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCounts from a JSON string
list_all_project_snapshots200_response_snapshots_inner_issue_counts_instance = ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCounts.from_json(json)
# print the JSON string representation of the object
print(ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCounts.to_json())

# convert the object into a dict
list_all_project_snapshots200_response_snapshots_inner_issue_counts_dict = list_all_project_snapshots200_response_snapshots_inner_issue_counts_instance.to_dict()
# create an instance of ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCounts from a dict
list_all_project_snapshots200_response_snapshots_inner_issue_counts_from_dict = ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCounts.from_dict(list_all_project_snapshots200_response_snapshots_inner_issue_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


