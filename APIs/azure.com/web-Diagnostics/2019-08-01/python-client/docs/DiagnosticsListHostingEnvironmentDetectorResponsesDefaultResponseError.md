# DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseError

Error model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Standardized string to programmatically identify the error. | [optional] [readonly] 
**details** | [**List[DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseErrorDetailsInner]**](DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseErrorDetailsInner.md) |  | [optional] 
**innererror** | **str** | More information to debug error. | [optional] [readonly] 
**message** | **str** | Detailed error description and debugging information. | [optional] [readonly] 
**target** | **str** | Detailed error description and debugging information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.diagnostics_list_hosting_environment_detector_responses_default_response_error import DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseError from a JSON string
diagnostics_list_hosting_environment_detector_responses_default_response_error_instance = DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseError.to_json())

# convert the object into a dict
diagnostics_list_hosting_environment_detector_responses_default_response_error_dict = diagnostics_list_hosting_environment_detector_responses_default_response_error_instance.to_dict()
# create an instance of DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseError from a dict
diagnostics_list_hosting_environment_detector_responses_default_response_error_from_dict = DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseError.from_dict(diagnostics_list_hosting_environment_detector_responses_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


