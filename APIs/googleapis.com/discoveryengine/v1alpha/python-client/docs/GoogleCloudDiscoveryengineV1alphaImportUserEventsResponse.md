# GoogleCloudDiscoveryengineV1alphaImportUserEventsResponse

Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_config** | [**GoogleCloudDiscoveryengineV1alphaImportErrorConfig**](GoogleCloudDiscoveryengineV1alphaImportErrorConfig.md) |  | [optional] 
**error_samples** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | A sample of errors encountered while processing the request. | [optional] 
**joined_events_count** | **str** | Count of user events imported with complete existing Documents. | [optional] 
**unjoined_events_count** | **str** | Count of user events imported, but with Document information not found in the existing Branch. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_import_user_events_response import GoogleCloudDiscoveryengineV1alphaImportUserEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaImportUserEventsResponse from a JSON string
google_cloud_discoveryengine_v1alpha_import_user_events_response_instance = GoogleCloudDiscoveryengineV1alphaImportUserEventsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaImportUserEventsResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_import_user_events_response_dict = google_cloud_discoveryengine_v1alpha_import_user_events_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaImportUserEventsResponse from a dict
google_cloud_discoveryengine_v1alpha_import_user_events_response_from_dict = GoogleCloudDiscoveryengineV1alphaImportUserEventsResponse.from_dict(google_cloud_discoveryengine_v1alpha_import_user_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


