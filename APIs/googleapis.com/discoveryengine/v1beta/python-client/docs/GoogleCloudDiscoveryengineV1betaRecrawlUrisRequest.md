# GoogleCloudDiscoveryengineV1betaRecrawlUrisRequest

Request message for SiteSearchEngineService.RecrawlUris method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uris** | **List[str]** | Required. List of URIs to crawl. At most 10K URIs are supported, otherwise an INVALID_ARGUMENT error is thrown. Each URI should match at least one TargetSite in &#x60;site_search_engine&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_recrawl_uris_request import GoogleCloudDiscoveryengineV1betaRecrawlUrisRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaRecrawlUrisRequest from a JSON string
google_cloud_discoveryengine_v1beta_recrawl_uris_request_instance = GoogleCloudDiscoveryengineV1betaRecrawlUrisRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaRecrawlUrisRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_recrawl_uris_request_dict = google_cloud_discoveryengine_v1beta_recrawl_uris_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaRecrawlUrisRequest from a dict
google_cloud_discoveryengine_v1beta_recrawl_uris_request_from_dict = GoogleCloudDiscoveryengineV1betaRecrawlUrisRequest.from_dict(google_cloud_discoveryengine_v1beta_recrawl_uris_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


