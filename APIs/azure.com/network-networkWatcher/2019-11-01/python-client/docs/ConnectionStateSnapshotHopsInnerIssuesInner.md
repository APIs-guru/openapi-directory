# ConnectionStateSnapshotHopsInnerIssuesInner

Information about an issue encountered in the process of checking for connectivity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **List[Dict[str, str]]** | Provides additional context on the issue. | [optional] [readonly] 
**origin** | **str** | The origin of the issue. | [optional] [readonly] 
**severity** | **str** | The severity of the issue. | [optional] [readonly] 
**type** | **str** | The type of issue. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection_state_snapshot_hops_inner_issues_inner import ConnectionStateSnapshotHopsInnerIssuesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionStateSnapshotHopsInnerIssuesInner from a JSON string
connection_state_snapshot_hops_inner_issues_inner_instance = ConnectionStateSnapshotHopsInnerIssuesInner.from_json(json)
# print the JSON string representation of the object
print(ConnectionStateSnapshotHopsInnerIssuesInner.to_json())

# convert the object into a dict
connection_state_snapshot_hops_inner_issues_inner_dict = connection_state_snapshot_hops_inner_issues_inner_instance.to_dict()
# create an instance of ConnectionStateSnapshotHopsInnerIssuesInner from a dict
connection_state_snapshot_hops_inner_issues_inner_from_dict = ConnectionStateSnapshotHopsInnerIssuesInner.from_dict(connection_state_snapshot_hops_inner_issues_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


