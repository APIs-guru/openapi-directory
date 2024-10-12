# ComplianceResultsGetDefaultResponseError

Error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | An identifier for the error. Codes are invariant and are intended to be consumed programmatically. | [optional] [readonly] 
**message** | **str** | A message describing the error, intended to be suitable for display in a user interface. | [optional] [readonly] 

## Example

```python
from openapi_client.models.compliance_results_get_default_response_error import ComplianceResultsGetDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceResultsGetDefaultResponseError from a JSON string
compliance_results_get_default_response_error_instance = ComplianceResultsGetDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(ComplianceResultsGetDefaultResponseError.to_json())

# convert the object into a dict
compliance_results_get_default_response_error_dict = compliance_results_get_default_response_error_instance.to_dict()
# create an instance of ComplianceResultsGetDefaultResponseError from a dict
compliance_results_get_default_response_error_from_dict = ComplianceResultsGetDefaultResponseError.from_dict(compliance_results_get_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


