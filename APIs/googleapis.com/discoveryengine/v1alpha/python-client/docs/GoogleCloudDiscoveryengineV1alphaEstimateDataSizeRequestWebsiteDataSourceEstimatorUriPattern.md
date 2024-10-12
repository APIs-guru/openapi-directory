# GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSourceEstimatorUriPattern

URI patterns that we use to crawl.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exact_match** | **bool** | Whether we infer the generated URI or use the exact provided one. | [optional] 
**exclusive** | **bool** | Whether the pattern is exclusive or not. If set to true, the pattern is considered exclusive. If unset or set to false, the pattern is considered inclusive by default. | [optional] 
**provided_uri_pattern** | **str** | User provided URI pattern. For example, &#x60;foo.com/bar/*&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_estimate_data_size_request_website_data_source_estimator_uri_pattern import GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSourceEstimatorUriPattern

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSourceEstimatorUriPattern from a JSON string
google_cloud_discoveryengine_v1alpha_estimate_data_size_request_website_data_source_estimator_uri_pattern_instance = GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSourceEstimatorUriPattern.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSourceEstimatorUriPattern.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_estimate_data_size_request_website_data_source_estimator_uri_pattern_dict = google_cloud_discoveryengine_v1alpha_estimate_data_size_request_website_data_source_estimator_uri_pattern_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSourceEstimatorUriPattern from a dict
google_cloud_discoveryengine_v1alpha_estimate_data_size_request_website_data_source_estimator_uri_pattern_from_dict = GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSourceEstimatorUriPattern.from_dict(google_cloud_discoveryengine_v1alpha_estimate_data_size_request_website_data_source_estimator_uri_pattern_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


