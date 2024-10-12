# CheckAutopilotCompatibilityResponse

CheckAutopilotCompatibilityResponse has a list of compatibility issues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issues** | [**List[AutopilotCompatibilityIssue]**](AutopilotCompatibilityIssue.md) | The list of issues for the given operation. | [optional] 
**summary** | **str** | The summary of the autopilot compatibility response. | [optional] 

## Example

```python
from openapi_client.models.check_autopilot_compatibility_response import CheckAutopilotCompatibilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckAutopilotCompatibilityResponse from a JSON string
check_autopilot_compatibility_response_instance = CheckAutopilotCompatibilityResponse.from_json(json)
# print the JSON string representation of the object
print(CheckAutopilotCompatibilityResponse.to_json())

# convert the object into a dict
check_autopilot_compatibility_response_dict = check_autopilot_compatibility_response_instance.to_dict()
# create an instance of CheckAutopilotCompatibilityResponse from a dict
check_autopilot_compatibility_response_from_dict = CheckAutopilotCompatibilityResponse.from_dict(check_autopilot_compatibility_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


