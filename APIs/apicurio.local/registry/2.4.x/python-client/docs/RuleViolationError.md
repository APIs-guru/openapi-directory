# RuleViolationError

All error responses, whether `4xx` or `5xx` will include one of these as the response body.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Full details about the error.  This might contain a server stack trace, for example. | [optional] 
**error_code** | **int** | The server-side error code. | [optional] 
**message** | **str** | The short error message. | [optional] 
**name** | **str** | The error name - typically the classname of the exception thrown by the server. | [optional] 
**causes** | [**List[RuleViolationCause]**](RuleViolationCause.md) | List of rule violation causes. | 

## Example

```python
from openapi_client.models.rule_violation_error import RuleViolationError

# TODO update the JSON string below
json = "{}"
# create an instance of RuleViolationError from a JSON string
rule_violation_error_instance = RuleViolationError.from_json(json)
# print the JSON string representation of the object
print(RuleViolationError.to_json())

# convert the object into a dict
rule_violation_error_dict = rule_violation_error_instance.to_dict()
# create an instance of RuleViolationError from a dict
rule_violation_error_from_dict = RuleViolationError.from_dict(rule_violation_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


