# GoogleCloudDiscoveryengineLoggingSourceLocation

Indicates a location in the source code of the service for which errors are reported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**function_name** | **str** | Human-readable name of a function or method—for example, &#x60;google.cloud.discoveryengine.v1alpha.RecommendationService.Recommend&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_logging_source_location import GoogleCloudDiscoveryengineLoggingSourceLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineLoggingSourceLocation from a JSON string
google_cloud_discoveryengine_logging_source_location_instance = GoogleCloudDiscoveryengineLoggingSourceLocation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineLoggingSourceLocation.to_json())

# convert the object into a dict
google_cloud_discoveryengine_logging_source_location_dict = google_cloud_discoveryengine_logging_source_location_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineLoggingSourceLocation from a dict
google_cloud_discoveryengine_logging_source_location_from_dict = GoogleCloudDiscoveryengineLoggingSourceLocation.from_dict(google_cloud_discoveryengine_logging_source_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


