# GoogleCloudDialogflowCxV3CalculateCoverageResponse

The response message for TestCases.CalculateCoverage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent** | **str** | The agent to calculate coverage for. Format: &#x60;projects//locations//agents/&#x60;. | [optional] 
**intent_coverage** | [**GoogleCloudDialogflowCxV3IntentCoverage**](GoogleCloudDialogflowCxV3IntentCoverage.md) |  | [optional] 
**route_group_coverage** | [**GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage**](GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage.md) |  | [optional] 
**transition_coverage** | [**GoogleCloudDialogflowCxV3TransitionCoverage**](GoogleCloudDialogflowCxV3TransitionCoverage.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_calculate_coverage_response import GoogleCloudDialogflowCxV3CalculateCoverageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3CalculateCoverageResponse from a JSON string
google_cloud_dialogflow_cx_v3_calculate_coverage_response_instance = GoogleCloudDialogflowCxV3CalculateCoverageResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3CalculateCoverageResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_calculate_coverage_response_dict = google_cloud_dialogflow_cx_v3_calculate_coverage_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3CalculateCoverageResponse from a dict
google_cloud_dialogflow_cx_v3_calculate_coverage_response_from_dict = GoogleCloudDialogflowCxV3CalculateCoverageResponse.from_dict(google_cloud_dialogflow_cx_v3_calculate_coverage_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


