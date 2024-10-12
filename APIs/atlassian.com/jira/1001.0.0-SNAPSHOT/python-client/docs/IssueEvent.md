# IssueEvent

Details about an issue event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the event. | [optional] [readonly] 
**name** | **str** | The name of the event. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_event import IssueEvent

# TODO update the JSON string below
json = "{}"
# create an instance of IssueEvent from a JSON string
issue_event_instance = IssueEvent.from_json(json)
# print the JSON string representation of the object
print(IssueEvent.to_json())

# convert the object into a dict
issue_event_dict = issue_event_instance.to_dict()
# create an instance of IssueEvent from a dict
issue_event_from_dict = IssueEvent.from_dict(issue_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


