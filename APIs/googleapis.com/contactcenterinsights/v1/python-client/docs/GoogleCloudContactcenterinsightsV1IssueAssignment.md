# GoogleCloudContactcenterinsightsV1IssueAssignment

Information about the issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Immutable. Display name of the assigned issue. This field is set at time of analyis and immutable since then. | [optional] 
**issue** | **str** | Resource name of the assigned issue. | [optional] 
**score** | **float** | Score indicating the likelihood of the issue assignment. currently bounded on [0,1]. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_issue_assignment import GoogleCloudContactcenterinsightsV1IssueAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1IssueAssignment from a JSON string
google_cloud_contactcenterinsights_v1_issue_assignment_instance = GoogleCloudContactcenterinsightsV1IssueAssignment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1IssueAssignment.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_issue_assignment_dict = google_cloud_contactcenterinsights_v1_issue_assignment_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1IssueAssignment from a dict
google_cloud_contactcenterinsights_v1_issue_assignment_from_dict = GoogleCloudContactcenterinsightsV1IssueAssignment.from_dict(google_cloud_contactcenterinsights_v1_issue_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


