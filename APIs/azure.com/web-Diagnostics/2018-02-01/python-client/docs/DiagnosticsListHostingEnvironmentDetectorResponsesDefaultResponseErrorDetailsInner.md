# DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseErrorDetailsInner

Detailed errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Standardized string to programmatically identify the error. | [optional] [readonly] 
**message** | **str** | Detailed error description and debugging information. | [optional] [readonly] 
**target** | **str** | Detailed error description and debugging information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.diagnostics_list_hosting_environment_detector_responses_default_response_error_details_inner import DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseErrorDetailsInner from a JSON string
diagnostics_list_hosting_environment_detector_responses_default_response_error_details_inner_instance = DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseErrorDetailsInner.to_json())

# convert the object into a dict
diagnostics_list_hosting_environment_detector_responses_default_response_error_details_inner_dict = diagnostics_list_hosting_environment_detector_responses_default_response_error_details_inner_instance.to_dict()
# create an instance of DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseErrorDetailsInner from a dict
diagnostics_list_hosting_environment_detector_responses_default_response_error_details_inner_from_dict = DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseErrorDetailsInner.from_dict(diagnostics_list_hosting_environment_detector_responses_default_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


