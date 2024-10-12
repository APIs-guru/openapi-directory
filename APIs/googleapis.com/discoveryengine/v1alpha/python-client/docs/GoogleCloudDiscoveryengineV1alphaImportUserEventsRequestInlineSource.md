# GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource

The inline source for the input config for ImportUserEvents method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_events** | [**List[GoogleCloudDiscoveryengineV1alphaUserEvent]**](GoogleCloudDiscoveryengineV1alphaUserEvent.md) | Required. A list of user events to import. Recommended max of 10k items. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_import_user_events_request_inline_source import GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource from a JSON string
google_cloud_discoveryengine_v1alpha_import_user_events_request_inline_source_instance = GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_import_user_events_request_inline_source_dict = google_cloud_discoveryengine_v1alpha_import_user_events_request_inline_source_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource from a dict
google_cloud_discoveryengine_v1alpha_import_user_events_request_inline_source_from_dict = GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource.from_dict(google_cloud_discoveryengine_v1alpha_import_user_events_request_inline_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


