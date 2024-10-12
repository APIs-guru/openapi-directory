# Fields

Key fields from the linked issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee** | [**UserDetails**](UserDetails.md) | The assignee of the linked issue. | [optional] [readonly] 
**issue_type** | [**IssueTypeDetails**](IssueTypeDetails.md) | The type of the linked issue. | [optional] [readonly] 
**issuetype** | [**IssueTypeDetails**](IssueTypeDetails.md) |  | [optional] 
**priority** | [**Priority**](Priority.md) | The priority of the linked issue. | [optional] [readonly] 
**status** | [**StatusDetails**](StatusDetails.md) | The status of the linked issue. | [optional] [readonly] 
**summary** | **str** | The summary description of the linked issue. | [optional] [readonly] 
**timetracking** | [**TimeTrackingDetails**](TimeTrackingDetails.md) | The time tracking of the linked issue. | [optional] [readonly] 

## Example

```python
from openapi_client.models.fields import Fields

# TODO update the JSON string below
json = "{}"
# create an instance of Fields from a JSON string
fields_instance = Fields.from_json(json)
# print the JSON string representation of the object
print(Fields.to_json())

# convert the object into a dict
fields_dict = fields_instance.to_dict()
# create an instance of Fields from a dict
fields_from_dict = Fields.from_dict(fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


