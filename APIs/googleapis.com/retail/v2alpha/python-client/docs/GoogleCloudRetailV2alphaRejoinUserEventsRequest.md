# GoogleCloudRetailV2alphaRejoinUserEventsRequest

Request message for RejoinUserEvents method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_event_rejoin_scope** | **str** | The type of the user event rejoin to define the scope and range of the user events to be rejoined with the latest product catalog. Defaults to &#x60;USER_EVENT_REJOIN_SCOPE_UNSPECIFIED&#x60; if this field is not set, or set to an invalid integer value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_rejoin_user_events_request import GoogleCloudRetailV2alphaRejoinUserEventsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaRejoinUserEventsRequest from a JSON string
google_cloud_retail_v2alpha_rejoin_user_events_request_instance = GoogleCloudRetailV2alphaRejoinUserEventsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaRejoinUserEventsRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_rejoin_user_events_request_dict = google_cloud_retail_v2alpha_rejoin_user_events_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaRejoinUserEventsRequest from a dict
google_cloud_retail_v2alpha_rejoin_user_events_request_from_dict = GoogleCloudRetailV2alphaRejoinUserEventsRequest.from_dict(google_cloud_retail_v2alpha_rejoin_user_events_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


