# PullRequestAssignment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignees** | **List[object]** | an array of usernames that have contributed to the organization&#39;s project(s). | [optional] 
**enabled** | **bool** | if the organization&#39;s project(s) will assign Snyk pull requests. | [optional] 
**type** | [**AssignmentType**](AssignmentType.md) |  | [optional] 

## Example

```python
from openapi_client.models.pull_request_assignment import PullRequestAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of PullRequestAssignment from a JSON string
pull_request_assignment_instance = PullRequestAssignment.from_json(json)
# print the JSON string representation of the object
print(PullRequestAssignment.to_json())

# convert the object into a dict
pull_request_assignment_dict = pull_request_assignment_instance.to_dict()
# create an instance of PullRequestAssignment from a dict
pull_request_assignment_from_dict = PullRequestAssignment.from_dict(pull_request_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


