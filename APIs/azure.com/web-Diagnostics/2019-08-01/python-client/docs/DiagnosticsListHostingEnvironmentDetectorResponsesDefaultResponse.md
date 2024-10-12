# DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponse

App Service error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseError**](DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.diagnostics_list_hosting_environment_detector_responses_default_response import DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponse from a JSON string
diagnostics_list_hosting_environment_detector_responses_default_response_instance = DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponse.to_json())

# convert the object into a dict
diagnostics_list_hosting_environment_detector_responses_default_response_dict = diagnostics_list_hosting_environment_detector_responses_default_response_instance.to_dict()
# create an instance of DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponse from a dict
diagnostics_list_hosting_environment_detector_responses_default_response_from_dict = DiagnosticsListHostingEnvironmentDetectorResponsesDefaultResponse.from_dict(diagnostics_list_hosting_environment_detector_responses_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


