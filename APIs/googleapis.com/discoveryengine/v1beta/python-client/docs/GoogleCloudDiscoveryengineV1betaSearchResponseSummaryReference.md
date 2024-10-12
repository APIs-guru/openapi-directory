# GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReference

Document reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | **str** | Required. Document.name of the document. Full resource name of the referenced document, in the format &#x60;projects/*/locations/*/collections/*/dataStores/*/branches/*/documents/*&#x60;. | [optional] 
**title** | **str** | Title of the document. | [optional] 
**uri** | **str** | Cloud Storage or HTTP uri for the document. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_search_response_summary_reference import GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReference

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReference from a JSON string
google_cloud_discoveryengine_v1beta_search_response_summary_reference_instance = GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReference.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReference.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_search_response_summary_reference_dict = google_cloud_discoveryengine_v1beta_search_response_summary_reference_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReference from a dict
google_cloud_discoveryengine_v1beta_search_response_summary_reference_from_dict = GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReference.from_dict(google_cloud_discoveryengine_v1beta_search_response_summary_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


