# GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponse

Response message for SiteSearchEngineService.RecrawlUris method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_uris** | **List[str]** | URIs that were not crawled before the LRO terminated. | [optional] 
**failure_samples** | [**List[GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfo]**](GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfo.md) | Details for a sample of up to 10 &#x60;failed_uris&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_recrawl_uris_response import GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponse from a JSON string
google_cloud_discoveryengine_v1alpha_recrawl_uris_response_instance = GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_recrawl_uris_response_dict = google_cloud_discoveryengine_v1alpha_recrawl_uris_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponse from a dict
google_cloud_discoveryengine_v1alpha_recrawl_uris_response_from_dict = GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponse.from_dict(google_cloud_discoveryengine_v1alpha_recrawl_uris_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


