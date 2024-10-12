# GoogleCloudRetailV2betaRejoinUserEventsResponse

Response message for `RejoinUserEvents` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rejoined_user_events_count** | **str** | Number of user events that were joined with latest product catalog. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_rejoin_user_events_response import GoogleCloudRetailV2betaRejoinUserEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaRejoinUserEventsResponse from a JSON string
google_cloud_retail_v2beta_rejoin_user_events_response_instance = GoogleCloudRetailV2betaRejoinUserEventsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaRejoinUserEventsResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_rejoin_user_events_response_dict = google_cloud_retail_v2beta_rejoin_user_events_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaRejoinUserEventsResponse from a dict
google_cloud_retail_v2beta_rejoin_user_events_response_from_dict = GoogleCloudRetailV2betaRejoinUserEventsResponse.from_dict(google_cloud_retail_v2beta_rejoin_user_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


