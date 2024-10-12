# GoogleCloudDiscoveryengineV1alphaPurgeErrorConfig

Configuration of destination for Purge related errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_prefix** | **str** | Cloud Storage prefix for purge errors. This must be an empty, existing Cloud Storage directory. Purge errors are written to sharded files in this directory, one per line, as a JSON-encoded &#x60;google.rpc.Status&#x60; message. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_purge_error_config import GoogleCloudDiscoveryengineV1alphaPurgeErrorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaPurgeErrorConfig from a JSON string
google_cloud_discoveryengine_v1alpha_purge_error_config_instance = GoogleCloudDiscoveryengineV1alphaPurgeErrorConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaPurgeErrorConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_purge_error_config_dict = google_cloud_discoveryengine_v1alpha_purge_error_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaPurgeErrorConfig from a dict
google_cloud_discoveryengine_v1alpha_purge_error_config_from_dict = GoogleCloudDiscoveryengineV1alphaPurgeErrorConfig.from_dict(google_cloud_discoveryengine_v1alpha_purge_error_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


