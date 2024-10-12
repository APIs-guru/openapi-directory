# GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSource

Data source is a set of website patterns that we crawl to get the total number of websites.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimator_uri_patterns** | [**List[GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSourceEstimatorUriPattern]**](GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSourceEstimatorUriPattern.md) | Required. The URI patterns to estimate the data sizes. At most 10 patterns are allowed, otherwise an INVALID_ARGUMENT error is thrown. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_estimate_data_size_request_website_data_source import GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSource from a JSON string
google_cloud_discoveryengine_v1alpha_estimate_data_size_request_website_data_source_instance = GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSource.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_estimate_data_size_request_website_data_source_dict = google_cloud_discoveryengine_v1alpha_estimate_data_size_request_website_data_source_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSource from a dict
google_cloud_discoveryengine_v1alpha_estimate_data_size_request_website_data_source_from_dict = GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSource.from_dict(google_cloud_discoveryengine_v1alpha_estimate_data_size_request_website_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


