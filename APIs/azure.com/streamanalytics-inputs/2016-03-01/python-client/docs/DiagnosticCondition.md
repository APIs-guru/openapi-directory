# DiagnosticCondition

Condition applicable to the resource, or to the job overall, that warrant customer attention.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The opaque diagnostic code. | [optional] [readonly] 
**message** | **str** | The human-readable message describing the condition in detail. Localized in the Accept-Language of the client request. | [optional] [readonly] 
**since** | **str** | The UTC timestamp of when the condition started. Customers should be able to find a corresponding event in the ops log around this time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.diagnostic_condition import DiagnosticCondition

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticCondition from a JSON string
diagnostic_condition_instance = DiagnosticCondition.from_json(json)
# print the JSON string representation of the object
print(DiagnosticCondition.to_json())

# convert the object into a dict
diagnostic_condition_dict = diagnostic_condition_instance.to_dict()
# create an instance of DiagnosticCondition from a dict
diagnostic_condition_from_dict = DiagnosticCondition.from_dict(diagnostic_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


