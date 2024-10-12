# GoogleCloudRetailV2alphaPurgeUserEventsRequest

Request message for PurgeUserEvents method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Required. The filter string to specify the events to be deleted with a length limit of 5,000 characters. Empty string filter is not allowed. The eligible fields for filtering are: * &#x60;eventType&#x60;: Double quoted UserEvent.event_type string. * &#x60;eventTime&#x60;: in ISO 8601 \&quot;zulu\&quot; format. * &#x60;visitorId&#x60;: Double quoted string. Specifying this will delete all events associated with a visitor. * &#x60;userId&#x60;: Double quoted string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: &#x60;eventTime &gt; \&quot;2012-04-23T18:25:43.511Z\&quot; eventTime &lt; \&quot;2012-04-23T18:30:43.511Z\&quot;&#x60; * Deleting specific eventType in time range: &#x60;eventTime &gt; \&quot;2012-04-23T18:25:43.511Z\&quot; eventType &#x3D; \&quot;detail-page-view\&quot;&#x60; * Deleting all events for a specific visitor: &#x60;visitorId &#x3D; \&quot;visitor1024\&quot;&#x60; The filtering fields are assumed to have an implicit AND. | [optional] 
**force** | **bool** | Actually perform the purge. If &#x60;force&#x60; is set to false, the method will return the expected purge count without deleting any user events. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_purge_user_events_request import GoogleCloudRetailV2alphaPurgeUserEventsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaPurgeUserEventsRequest from a JSON string
google_cloud_retail_v2alpha_purge_user_events_request_instance = GoogleCloudRetailV2alphaPurgeUserEventsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaPurgeUserEventsRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_purge_user_events_request_dict = google_cloud_retail_v2alpha_purge_user_events_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaPurgeUserEventsRequest from a dict
google_cloud_retail_v2alpha_purge_user_events_request_from_dict = GoogleCloudRetailV2alphaPurgeUserEventsRequest.from_dict(google_cloud_retail_v2alpha_purge_user_events_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


