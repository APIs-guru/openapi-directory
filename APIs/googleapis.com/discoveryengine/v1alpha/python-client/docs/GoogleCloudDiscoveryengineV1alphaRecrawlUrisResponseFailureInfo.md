# GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfo

Details about why a particular URI failed to be crawled. Each FailureInfo contains one FailureReason per CorpusType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_reasons** | [**List[GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReason]**](GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReason.md) | List of failure reasons by corpus type (e.g. desktop, mobile). | [optional] 
**uri** | **str** | URI that failed to be crawled. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_recrawl_uris_response_failure_info import GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfo from a JSON string
google_cloud_discoveryengine_v1alpha_recrawl_uris_response_failure_info_instance = GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfo.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_recrawl_uris_response_failure_info_dict = google_cloud_discoveryengine_v1alpha_recrawl_uris_response_failure_info_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfo from a dict
google_cloud_discoveryengine_v1alpha_recrawl_uris_response_failure_info_from_dict = GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfo.from_dict(google_cloud_discoveryengine_v1alpha_recrawl_uris_response_failure_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


