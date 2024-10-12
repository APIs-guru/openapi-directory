# AmpIssue

AMP issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_message** | **str** | Brief description of this issue. | [optional] 
**severity** | **str** | Severity of this issue: WARNING or ERROR. | [optional] 

## Example

```python
from openapi_client.models.amp_issue import AmpIssue

# TODO update the JSON string below
json = "{}"
# create an instance of AmpIssue from a JSON string
amp_issue_instance = AmpIssue.from_json(json)
# print the JSON string representation of the object
print(AmpIssue.to_json())

# convert the object into a dict
amp_issue_dict = amp_issue_instance.to_dict()
# create an instance of AmpIssue from a dict
amp_issue_from_dict = AmpIssue.from_dict(amp_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


