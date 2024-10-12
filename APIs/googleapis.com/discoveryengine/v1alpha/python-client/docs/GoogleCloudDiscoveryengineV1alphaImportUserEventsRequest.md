# GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest

Request message for the ImportUserEvents request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_source** | [**GoogleCloudDiscoveryengineV1alphaBigQuerySource**](GoogleCloudDiscoveryengineV1alphaBigQuerySource.md) |  | [optional] 
**error_config** | [**GoogleCloudDiscoveryengineV1alphaImportErrorConfig**](GoogleCloudDiscoveryengineV1alphaImportErrorConfig.md) |  | [optional] 
**gcs_source** | [**GoogleCloudDiscoveryengineV1alphaGcsSource**](GoogleCloudDiscoveryengineV1alphaGcsSource.md) |  | [optional] 
**inline_source** | [**GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource**](GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_import_user_events_request import GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest from a JSON string
google_cloud_discoveryengine_v1alpha_import_user_events_request_instance = GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_import_user_events_request_dict = google_cloud_discoveryengine_v1alpha_import_user_events_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest from a dict
google_cloud_discoveryengine_v1alpha_import_user_events_request_from_dict = GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest.from_dict(google_cloud_discoveryengine_v1alpha_import_user_events_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


