# ErrorPrematureRedaction

Premature Redaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.error_premature_redaction import ErrorPrematureRedaction

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorPrematureRedaction from a JSON string
error_premature_redaction_instance = ErrorPrematureRedaction.from_json(json)
# print the JSON string representation of the object
print(ErrorPrematureRedaction.to_json())

# convert the object into a dict
error_premature_redaction_dict = error_premature_redaction_instance.to_dict()
# create an instance of ErrorPrematureRedaction from a dict
error_premature_redaction_from_dict = ErrorPrematureRedaction.from_dict(error_premature_redaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


