# GoogleCloudDiscoveryengineV1betaImportUserEventsRequest

Request message for the ImportUserEvents request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_source** | [**GoogleCloudDiscoveryengineV1betaBigQuerySource**](GoogleCloudDiscoveryengineV1betaBigQuerySource.md) |  | [optional] 
**error_config** | [**GoogleCloudDiscoveryengineV1betaImportErrorConfig**](GoogleCloudDiscoveryengineV1betaImportErrorConfig.md) |  | [optional] 
**gcs_source** | [**GoogleCloudDiscoveryengineV1betaGcsSource**](GoogleCloudDiscoveryengineV1betaGcsSource.md) |  | [optional] 
**inline_source** | [**GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource**](GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_import_user_events_request import GoogleCloudDiscoveryengineV1betaImportUserEventsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaImportUserEventsRequest from a JSON string
google_cloud_discoveryengine_v1beta_import_user_events_request_instance = GoogleCloudDiscoveryengineV1betaImportUserEventsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaImportUserEventsRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_import_user_events_request_dict = google_cloud_discoveryengine_v1beta_import_user_events_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaImportUserEventsRequest from a dict
google_cloud_discoveryengine_v1beta_import_user_events_request_from_dict = GoogleCloudDiscoveryengineV1betaImportUserEventsRequest.from_dict(google_cloud_discoveryengine_v1beta_import_user_events_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


