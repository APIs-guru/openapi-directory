# GoogleCloudDiscoveryengineV1alphaSearchRequestFacetSpec

A facet specification to perform faceted search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_dynamic_position** | **bool** | Enables dynamic position for this facet. If set to true, the position of this facet among all facets in the response is determined automatically. If dynamic facets are enabled, it is ordered together. If set to false, the position of this facet in the response is the same as in the request, and it is ranked before the facets with dynamic position enable and all dynamic facets. For example, you may always want to have rating facet returned in the response, but it&#39;s not necessarily to always display the rating facet at the top. In that case, you can set enable_dynamic_position to true so that the position of rating facet in response is determined automatically. Another example, assuming you have the following facets in the request: * \&quot;rating\&quot;, enable_dynamic_position &#x3D; true * \&quot;price\&quot;, enable_dynamic_position &#x3D; false * \&quot;brands\&quot;, enable_dynamic_position &#x3D; false And also you have a dynamic facets enabled, which generates a facet &#x60;gender&#x60;. Then the final order of the facets in the response can be (\&quot;price\&quot;, \&quot;brands\&quot;, \&quot;rating\&quot;, \&quot;gender\&quot;) or (\&quot;price\&quot;, \&quot;brands\&quot;, \&quot;gender\&quot;, \&quot;rating\&quot;) depends on how API orders \&quot;gender\&quot; and \&quot;rating\&quot; facets. However, notice that \&quot;price\&quot; and \&quot;brands\&quot; are always ranked at first and second position because their enable_dynamic_position is false. | [optional] 
**excluded_filter_keys** | **List[str]** | List of keys to exclude when faceting. By default, FacetKey.key is not excluded from the filter unless it is listed in this field. Listing a facet key in this field allows its values to appear as facet results, even when they are filtered out of search results. Using this field does not affect what search results are returned. For example, suppose there are 100 documents with the color facet \&quot;Red\&quot; and 200 documents with the color facet \&quot;Blue\&quot;. A query containing the filter \&quot;color:ANY(\&quot;Red\&quot;)\&quot; and having \&quot;color\&quot; as FacetKey.key would by default return only \&quot;Red\&quot; documents in the search results, and also return \&quot;Red\&quot; with count 100 as the only color facet. Although there are also blue documents available, \&quot;Blue\&quot; would not be shown as an available facet value. If \&quot;color\&quot; is listed in \&quot;excludedFilterKeys\&quot;, then the query returns the facet values \&quot;Red\&quot; with count 100 and \&quot;Blue\&quot; with count 200, because the \&quot;color\&quot; key is now excluded from the filter. Because this field doesn&#39;t affect search results, the search results are still correctly filtered to return only \&quot;Red\&quot; documents. A maximum of 100 values are allowed. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. | [optional] 
**facet_key** | [**GoogleCloudDiscoveryengineV1alphaSearchRequestFacetSpecFacetKey**](GoogleCloudDiscoveryengineV1alphaSearchRequestFacetSpecFacetKey.md) |  | [optional] 
**limit** | **int** | Maximum of facet values that should be returned for this facet. If unspecified, defaults to 20. The maximum allowed value is 300. Values above 300 are coerced to 300. If this field is negative, an &#x60;INVALID_ARGUMENT&#x60; is returned. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_search_request_facet_spec import GoogleCloudDiscoveryengineV1alphaSearchRequestFacetSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchRequestFacetSpec from a JSON string
google_cloud_discoveryengine_v1alpha_search_request_facet_spec_instance = GoogleCloudDiscoveryengineV1alphaSearchRequestFacetSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSearchRequestFacetSpec.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_search_request_facet_spec_dict = google_cloud_discoveryengine_v1alpha_search_request_facet_spec_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchRequestFacetSpec from a dict
google_cloud_discoveryengine_v1alpha_search_request_facet_spec_from_dict = GoogleCloudDiscoveryengineV1alphaSearchRequestFacetSpec.from_dict(google_cloud_discoveryengine_v1alpha_search_request_facet_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


