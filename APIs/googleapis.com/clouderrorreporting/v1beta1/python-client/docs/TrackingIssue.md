# TrackingIssue

Information related to tracking the progress on resolving the error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | A URL pointing to a related entry in an issue tracking system. Example: &#x60;https://github.com/user/project/issues/4&#x60; | [optional] 

## Example

```python
from openapi_client.models.tracking_issue import TrackingIssue

# TODO update the JSON string below
json = "{}"
# create an instance of TrackingIssue from a JSON string
tracking_issue_instance = TrackingIssue.from_json(json)
# print the JSON string representation of the object
print(TrackingIssue.to_json())

# convert the object into a dict
tracking_issue_dict = tracking_issue_instance.to_dict()
# create an instance of TrackingIssue from a dict
tracking_issue_from_dict = TrackingIssue.from_dict(tracking_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


