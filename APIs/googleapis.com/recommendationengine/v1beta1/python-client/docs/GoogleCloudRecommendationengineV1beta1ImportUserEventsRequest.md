# GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest

Request message for the ImportUserEvents request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors_config** | [**GoogleCloudRecommendationengineV1beta1ImportErrorsConfig**](GoogleCloudRecommendationengineV1beta1ImportErrorsConfig.md) |  | [optional] 
**input_config** | [**GoogleCloudRecommendationengineV1beta1InputConfig**](GoogleCloudRecommendationengineV1beta1InputConfig.md) |  | [optional] 
**request_id** | **str** | Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency for expensive long running operations. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response. Note that this field must not be set if the desired input config is catalog_inline_source. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_import_user_events_request import GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest from a JSON string
google_cloud_recommendationengine_v1beta1_import_user_events_request_instance = GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_import_user_events_request_dict = google_cloud_recommendationengine_v1beta1_import_user_events_request_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest from a dict
google_cloud_recommendationengine_v1beta1_import_user_events_request_from_dict = GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest.from_dict(google_cloud_recommendationengine_v1beta1_import_user_events_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


