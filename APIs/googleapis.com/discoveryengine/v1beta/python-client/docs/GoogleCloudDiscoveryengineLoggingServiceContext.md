# GoogleCloudDiscoveryengineLoggingServiceContext

Describes a running service that sends errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | **str** | An identifier of the service—for example, &#x60;discoveryengine.googleapis.com&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_logging_service_context import GoogleCloudDiscoveryengineLoggingServiceContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineLoggingServiceContext from a JSON string
google_cloud_discoveryengine_logging_service_context_instance = GoogleCloudDiscoveryengineLoggingServiceContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineLoggingServiceContext.to_json())

# convert the object into a dict
google_cloud_discoveryengine_logging_service_context_dict = google_cloud_discoveryengine_logging_service_context_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineLoggingServiceContext from a dict
google_cloud_discoveryengine_logging_service_context_from_dict = GoogleCloudDiscoveryengineLoggingServiceContext.from_dict(google_cloud_discoveryengine_logging_service_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


