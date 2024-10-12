# MobileUsabilityIssue

Mobile-usability issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_type** | **str** | Mobile-usability issue type. | [optional] 
**message** | **str** | Additional information regarding the issue. | [optional] 
**severity** | **str** | Not returned; reserved for future use. | [optional] 

## Example

```python
from openapi_client.models.mobile_usability_issue import MobileUsabilityIssue

# TODO update the JSON string below
json = "{}"
# create an instance of MobileUsabilityIssue from a JSON string
mobile_usability_issue_instance = MobileUsabilityIssue.from_json(json)
# print the JSON string representation of the object
print(MobileUsabilityIssue.to_json())

# convert the object into a dict
mobile_usability_issue_dict = mobile_usability_issue_instance.to_dict()
# create an instance of MobileUsabilityIssue from a dict
mobile_usability_issue_from_dict = MobileUsabilityIssue.from_dict(mobile_usability_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


