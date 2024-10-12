# GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySummaryWithMetadata

Summary with metadata information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**citation_metadata** | [**GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryCitationMetadata**](GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryCitationMetadata.md) |  | [optional] 
**references** | [**List[GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryReference]**](GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryReference.md) | Document References. | [optional] 
**summary** | **str** | Summary text with no citation information. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_search_response_summary_summary_with_metadata import GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySummaryWithMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySummaryWithMetadata from a JSON string
google_cloud_discoveryengine_v1alpha_search_response_summary_summary_with_metadata_instance = GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySummaryWithMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySummaryWithMetadata.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_search_response_summary_summary_with_metadata_dict = google_cloud_discoveryengine_v1alpha_search_response_summary_summary_with_metadata_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySummaryWithMetadata from a dict
google_cloud_discoveryengine_v1alpha_search_response_summary_summary_with_metadata_from_dict = GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySummaryWithMetadata.from_dict(google_cloud_discoveryengine_v1alpha_search_response_summary_summary_with_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


