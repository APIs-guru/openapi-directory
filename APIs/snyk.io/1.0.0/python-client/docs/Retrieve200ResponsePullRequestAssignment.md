# Retrieve200ResponsePullRequestAssignment

assign Snyk pull requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignees** | **List[object]** | an array of usernames that have contributed to the organization&#39;s project(s). | [optional] 
**enabled** | **bool** | if the organization&#39;s project(s) will assign Snyk pull requests. | [optional] 
**type** | **str** | a string representing the type of assignment your projects require. | [optional] 

## Example

```python
from openapi_client.models.retrieve200_response_pull_request_assignment import Retrieve200ResponsePullRequestAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of Retrieve200ResponsePullRequestAssignment from a JSON string
retrieve200_response_pull_request_assignment_instance = Retrieve200ResponsePullRequestAssignment.from_json(json)
# print the JSON string representation of the object
print(Retrieve200ResponsePullRequestAssignment.to_json())

# convert the object into a dict
retrieve200_response_pull_request_assignment_dict = retrieve200_response_pull_request_assignment_instance.to_dict()
# create an instance of Retrieve200ResponsePullRequestAssignment from a dict
retrieve200_response_pull_request_assignment_from_dict = Retrieve200ResponsePullRequestAssignment.from_dict(retrieve200_response_pull_request_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


