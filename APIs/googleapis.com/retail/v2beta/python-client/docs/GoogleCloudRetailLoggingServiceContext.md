# GoogleCloudRetailLoggingServiceContext

Describes a running service that sends errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | **str** | An identifier of the service. For example, \&quot;retail.googleapis.com\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_logging_service_context import GoogleCloudRetailLoggingServiceContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailLoggingServiceContext from a JSON string
google_cloud_retail_logging_service_context_instance = GoogleCloudRetailLoggingServiceContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailLoggingServiceContext.to_json())

# convert the object into a dict
google_cloud_retail_logging_service_context_dict = google_cloud_retail_logging_service_context_instance.to_dict()
# create an instance of GoogleCloudRetailLoggingServiceContext from a dict
google_cloud_retail_logging_service_context_from_dict = GoogleCloudRetailLoggingServiceContext.from_dict(google_cloud_retail_logging_service_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


