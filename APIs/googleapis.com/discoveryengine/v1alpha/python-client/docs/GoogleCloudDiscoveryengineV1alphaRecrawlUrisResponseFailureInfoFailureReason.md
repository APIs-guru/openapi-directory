# GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReason

Details about why crawling failed for a particular CorpusType, e.g., DESKTOP and MOBILE crawling may fail for different reasons.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corpus_type** | **str** | DESKTOP, MOBILE, or CORPUS_TYPE_UNSPECIFIED. | [optional] 
**error_message** | **str** | Reason why the URI was not crawled. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_recrawl_uris_response_failure_info_failure_reason import GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReason

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReason from a JSON string
google_cloud_discoveryengine_v1alpha_recrawl_uris_response_failure_info_failure_reason_instance = GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReason.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReason.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_recrawl_uris_response_failure_info_failure_reason_dict = google_cloud_discoveryengine_v1alpha_recrawl_uris_response_failure_info_failure_reason_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReason from a dict
google_cloud_discoveryengine_v1alpha_recrawl_uris_response_failure_info_failure_reason_from_dict = GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReason.from_dict(google_cloud_discoveryengine_v1alpha_recrawl_uris_response_failure_info_failure_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


