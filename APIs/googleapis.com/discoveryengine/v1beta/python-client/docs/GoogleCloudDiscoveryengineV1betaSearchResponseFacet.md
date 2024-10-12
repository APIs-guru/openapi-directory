# GoogleCloudDiscoveryengineV1betaSearchResponseFacet

A facet result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_facet** | **bool** | Whether the facet is dynamically generated. | [optional] 
**key** | **str** | The key for this facet. E.g., \&quot;colors\&quot; or \&quot;price\&quot;. It matches SearchRequest.FacetSpec.FacetKey.key. | [optional] 
**values** | [**List[GoogleCloudDiscoveryengineV1betaSearchResponseFacetFacetValue]**](GoogleCloudDiscoveryengineV1betaSearchResponseFacetFacetValue.md) | The facet values for this field. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_search_response_facet import GoogleCloudDiscoveryengineV1betaSearchResponseFacet

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponseFacet from a JSON string
google_cloud_discoveryengine_v1beta_search_response_facet_instance = GoogleCloudDiscoveryengineV1betaSearchResponseFacet.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaSearchResponseFacet.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_search_response_facet_dict = google_cloud_discoveryengine_v1beta_search_response_facet_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponseFacet from a dict
google_cloud_discoveryengine_v1beta_search_response_facet_from_dict = GoogleCloudDiscoveryengineV1betaSearchResponseFacet.from_dict(google_cloud_discoveryengine_v1beta_search_response_facet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


