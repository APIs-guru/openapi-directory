# GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse

The response message for TestCases.CalculateCoverage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent** | **str** | The agent to calculate coverage for. Format: &#x60;projects//locations//agents/&#x60;. | [optional] 
**intent_coverage** | [**GoogleCloudDialogflowCxV3beta1IntentCoverage**](GoogleCloudDialogflowCxV3beta1IntentCoverage.md) |  | [optional] 
**route_group_coverage** | [**GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage**](GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage.md) |  | [optional] 
**transition_coverage** | [**GoogleCloudDialogflowCxV3beta1TransitionCoverage**](GoogleCloudDialogflowCxV3beta1TransitionCoverage.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_calculate_coverage_response import GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse from a JSON string
google_cloud_dialogflow_cx_v3beta1_calculate_coverage_response_instance = GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_calculate_coverage_response_dict = google_cloud_dialogflow_cx_v3beta1_calculate_coverage_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse from a dict
google_cloud_dialogflow_cx_v3beta1_calculate_coverage_response_from_dict = GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse.from_dict(google_cloud_dialogflow_cx_v3beta1_calculate_coverage_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


