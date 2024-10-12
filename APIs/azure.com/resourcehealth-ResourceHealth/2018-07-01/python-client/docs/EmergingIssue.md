# EmergingIssue

On-going emerging issue from azure status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refresh_timestamp** | **datetime** | Timestamp for when last time refreshed for ongoing emerging issue. | [optional] 
**status_active_events** | [**List[StatusActiveEvent]**](StatusActiveEvent.md) | The list of emerging issues of active event type. | [optional] 
**status_banners** | [**List[StatusBanner]**](StatusBanner.md) | The list of emerging issues of banner type. | [optional] 

## Example

```python
from openapi_client.models.emerging_issue import EmergingIssue

# TODO update the JSON string below
json = "{}"
# create an instance of EmergingIssue from a JSON string
emerging_issue_instance = EmergingIssue.from_json(json)
# print the JSON string representation of the object
print(EmergingIssue.to_json())

# convert the object into a dict
emerging_issue_dict = emerging_issue_instance.to_dict()
# create an instance of EmergingIssue from a dict
emerging_issue_from_dict = EmergingIssue.from_dict(emerging_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


