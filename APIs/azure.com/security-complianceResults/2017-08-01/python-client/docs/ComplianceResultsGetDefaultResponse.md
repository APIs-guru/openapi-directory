# ComplianceResultsGetDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ComplianceResultsGetDefaultResponseError**](ComplianceResultsGetDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.compliance_results_get_default_response import ComplianceResultsGetDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceResultsGetDefaultResponse from a JSON string
compliance_results_get_default_response_instance = ComplianceResultsGetDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ComplianceResultsGetDefaultResponse.to_json())

# convert the object into a dict
compliance_results_get_default_response_dict = compliance_results_get_default_response_instance.to_dict()
# create an instance of ComplianceResultsGetDefaultResponse from a dict
compliance_results_get_default_response_from_dict = ComplianceResultsGetDefaultResponse.from_dict(compliance_results_get_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


