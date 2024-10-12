# GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource

The inline source for the input config for ImportUserEvents method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_events** | [**List[GoogleCloudDiscoveryengineV1betaUserEvent]**](GoogleCloudDiscoveryengineV1betaUserEvent.md) | Required. A list of user events to import. Recommended max of 10k items. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_import_user_events_request_inline_source import GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource from a JSON string
google_cloud_discoveryengine_v1beta_import_user_events_request_inline_source_instance = GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_import_user_events_request_inline_source_dict = google_cloud_discoveryengine_v1beta_import_user_events_request_inline_source_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource from a dict
google_cloud_discoveryengine_v1beta_import_user_events_request_inline_source_from_dict = GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource.from_dict(google_cloud_discoveryengine_v1beta_import_user_events_request_inline_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


