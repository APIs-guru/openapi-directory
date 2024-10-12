# GoogleCloudRecommendationengineV1beta1ImportUserEventsResponse

Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_samples** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | A sample of errors encountered while processing the request. | [optional] 
**errors_config** | [**GoogleCloudRecommendationengineV1beta1ImportErrorsConfig**](GoogleCloudRecommendationengineV1beta1ImportErrorsConfig.md) |  | [optional] 
**import_summary** | [**GoogleCloudRecommendationengineV1beta1UserEventImportSummary**](GoogleCloudRecommendationengineV1beta1UserEventImportSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_import_user_events_response import GoogleCloudRecommendationengineV1beta1ImportUserEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1ImportUserEventsResponse from a JSON string
google_cloud_recommendationengine_v1beta1_import_user_events_response_instance = GoogleCloudRecommendationengineV1beta1ImportUserEventsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1ImportUserEventsResponse.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_import_user_events_response_dict = google_cloud_recommendationengine_v1beta1_import_user_events_response_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1ImportUserEventsResponse from a dict
google_cloud_recommendationengine_v1beta1_import_user_events_response_from_dict = GoogleCloudRecommendationengineV1beta1ImportUserEventsResponse.from_dict(google_cloud_recommendationengine_v1beta1_import_user_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


