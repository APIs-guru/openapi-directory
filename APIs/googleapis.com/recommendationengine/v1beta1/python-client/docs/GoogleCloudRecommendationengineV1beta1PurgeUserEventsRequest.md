# GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest

Request message for PurgeUserEvents method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Required. The filter string to specify the events to be deleted. Empty string filter is not allowed. The eligible fields for filtering are: * &#x60;eventType&#x60;: UserEvent.eventType field of type string. * &#x60;eventTime&#x60;: in ISO 8601 \&quot;zulu\&quot; format. * &#x60;visitorId&#x60;: field of type string. Specifying this will delete all events associated with a visitor. * &#x60;userId&#x60;: field of type string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: &#x60;eventTime &gt; \&quot;2012-04-23T18:25:43.511Z\&quot; eventTime &lt; \&quot;2012-04-23T18:30:43.511Z\&quot;&#x60; * Deleting specific eventType in time range: &#x60;eventTime &gt; \&quot;2012-04-23T18:25:43.511Z\&quot; eventType &#x3D; \&quot;detail-page-view\&quot;&#x60; * Deleting all events for a specific visitor: &#x60;visitorId &#x3D; \&quot;visitor1024\&quot;&#x60; The filtering fields are assumed to have an implicit AND. | [optional] 
**force** | **bool** | Optional. The default value is false. Override this flag to true to actually perform the purge. If the field is not set to true, a sampling of events to be deleted will be returned. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_purge_user_events_request import GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest from a JSON string
google_cloud_recommendationengine_v1beta1_purge_user_events_request_instance = GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_purge_user_events_request_dict = google_cloud_recommendationengine_v1beta1_purge_user_events_request_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest from a dict
google_cloud_recommendationengine_v1beta1_purge_user_events_request_from_dict = GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest.from_dict(google_cloud_recommendationengine_v1beta1_purge_user_events_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


