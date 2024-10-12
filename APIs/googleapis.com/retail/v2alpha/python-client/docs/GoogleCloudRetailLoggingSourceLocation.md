# GoogleCloudRetailLoggingSourceLocation

Indicates a location in the source code of the service for which errors are reported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**function_name** | **str** | Human-readable name of a function or method. For example, \&quot;google.cloud.retail.v2.UserEventService.ImportUserEvents\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_logging_source_location import GoogleCloudRetailLoggingSourceLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailLoggingSourceLocation from a JSON string
google_cloud_retail_logging_source_location_instance = GoogleCloudRetailLoggingSourceLocation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailLoggingSourceLocation.to_json())

# convert the object into a dict
google_cloud_retail_logging_source_location_dict = google_cloud_retail_logging_source_location_instance.to_dict()
# create an instance of GoogleCloudRetailLoggingSourceLocation from a dict
google_cloud_retail_logging_source_location_from_dict = GoogleCloudRetailLoggingSourceLocation.from_dict(google_cloud_retail_logging_source_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


