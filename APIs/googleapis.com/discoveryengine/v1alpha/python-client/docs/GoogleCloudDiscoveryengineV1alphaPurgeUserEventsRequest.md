# GoogleCloudDiscoveryengineV1alphaPurgeUserEventsRequest

Request message for PurgeUserEvents method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Required. The filter string to specify the events to be deleted with a length limit of 5,000 characters. The eligible fields for filtering are: * &#x60;eventType&#x60;: Double quoted UserEvent.event_type string. * &#x60;eventTime&#x60;: in ISO 8601 \&quot;zulu\&quot; format. * &#x60;userPseudoId&#x60;: Double quoted string. Specifying this will delete all events associated with a visitor. * &#x60;userId&#x60;: Double quoted string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: &#x60;eventTime &gt; \&quot;2012-04-23T18:25:43.511Z\&quot; eventTime &lt; \&quot;2012-04-23T18:30:43.511Z\&quot;&#x60; * Deleting specific eventType: &#x60;eventType &#x3D; \&quot;search\&quot;&#x60; * Deleting all events for a specific visitor: &#x60;userPseudoId &#x3D; \&quot;visitor1024\&quot;&#x60; * Deleting all events inside a DataStore: &#x60;*&#x60; The filtering fields are assumed to have an implicit AND. | [optional] 
**force** | **bool** | The &#x60;force&#x60; field is currently not supported. Purge user event requests will permanently delete all purgeable events. Once the development is complete: If &#x60;force&#x60; is set to false, the method will return the expected purge count without deleting any user events. This field will default to false if not included in the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_purge_user_events_request import GoogleCloudDiscoveryengineV1alphaPurgeUserEventsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaPurgeUserEventsRequest from a JSON string
google_cloud_discoveryengine_v1alpha_purge_user_events_request_instance = GoogleCloudDiscoveryengineV1alphaPurgeUserEventsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaPurgeUserEventsRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_purge_user_events_request_dict = google_cloud_discoveryengine_v1alpha_purge_user_events_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaPurgeUserEventsRequest from a dict
google_cloud_discoveryengine_v1alpha_purge_user_events_request_from_dict = GoogleCloudDiscoveryengineV1alphaPurgeUserEventsRequest.from_dict(google_cloud_discoveryengine_v1alpha_purge_user_events_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


