# AutopilotCompatibilityIssue

AutopilotCompatibilityIssue contains information about a specific compatibility issue with Autopilot mode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraint_type** | **str** | The constraint type of the issue. | [optional] 
**description** | **str** | The description of the issue. | [optional] 
**documentation_url** | **str** | A URL to a public documnetation, which addresses resolving this issue. | [optional] 
**incompatibility_type** | **str** | The incompatibility type of this issue. | [optional] 
**last_observation** | **str** | The last time when this issue was observed. | [optional] 
**subjects** | **List[str]** | The name of the resources which are subject to this issue. | [optional] 

## Example

```python
from openapi_client.models.autopilot_compatibility_issue import AutopilotCompatibilityIssue

# TODO update the JSON string below
json = "{}"
# create an instance of AutopilotCompatibilityIssue from a JSON string
autopilot_compatibility_issue_instance = AutopilotCompatibilityIssue.from_json(json)
# print the JSON string representation of the object
print(AutopilotCompatibilityIssue.to_json())

# convert the object into a dict
autopilot_compatibility_issue_dict = autopilot_compatibility_issue_instance.to_dict()
# create an instance of AutopilotCompatibilityIssue from a dict
autopilot_compatibility_issue_from_dict = AutopilotCompatibilityIssue.from_dict(autopilot_compatibility_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


