# GoogleCloudRetailV2betaSearchRequestFacetSpec

A facet specification to perform faceted search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_dynamic_position** | **bool** | Enables dynamic position for this facet. If set to true, the position of this facet among all facets in the response is determined by Google Retail Search. It is ordered together with dynamic facets if dynamic facets is enabled. If set to false, the position of this facet in the response is the same as in the request, and it is ranked before the facets with dynamic position enable and all dynamic facets. For example, you may always want to have rating facet returned in the response, but it&#39;s not necessarily to always display the rating facet at the top. In that case, you can set enable_dynamic_position to true so that the position of rating facet in response is determined by Google Retail Search. Another example, assuming you have the following facets in the request: * \&quot;rating\&quot;, enable_dynamic_position &#x3D; true * \&quot;price\&quot;, enable_dynamic_position &#x3D; false * \&quot;brands\&quot;, enable_dynamic_position &#x3D; false And also you have a dynamic facets enable, which generates a facet \&quot;gender\&quot;. Then, the final order of the facets in the response can be (\&quot;price\&quot;, \&quot;brands\&quot;, \&quot;rating\&quot;, \&quot;gender\&quot;) or (\&quot;price\&quot;, \&quot;brands\&quot;, \&quot;gender\&quot;, \&quot;rating\&quot;) depends on how Google Retail Search orders \&quot;gender\&quot; and \&quot;rating\&quot; facets. However, notice that \&quot;price\&quot; and \&quot;brands\&quot; are always ranked at first and second position because their enable_dynamic_position values are false. | [optional] 
**excluded_filter_keys** | **List[str]** | List of keys to exclude when faceting. By default, FacetKey.key is not excluded from the filter unless it is listed in this field. Listing a facet key in this field allows its values to appear as facet results, even when they are filtered out of search results. Using this field does not affect what search results are returned. For example, suppose there are 100 products with the color facet \&quot;Red\&quot; and 200 products with the color facet \&quot;Blue\&quot;. A query containing the filter \&quot;colorFamilies:ANY(\&quot;Red\&quot;)\&quot; and having \&quot;colorFamilies\&quot; as FacetKey.key would by default return only \&quot;Red\&quot; products in the search results, and also return \&quot;Red\&quot; with count 100 as the only color facet. Although there are also blue products available, \&quot;Blue\&quot; would not be shown as an available facet value. If \&quot;colorFamilies\&quot; is listed in \&quot;excludedFilterKeys\&quot;, then the query returns the facet values \&quot;Red\&quot; with count 100 and \&quot;Blue\&quot; with count 200, because the \&quot;colorFamilies\&quot; key is now excluded from the filter. Because this field doesn&#39;t affect search results, the search results are still correctly filtered to return only \&quot;Red\&quot; products. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**facet_key** | [**GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey**](GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey.md) |  | [optional] 
**limit** | **int** | Maximum of facet values that should be returned for this facet. If unspecified, defaults to 50. The maximum allowed value is 300. Values above 300 will be coerced to 300. If this field is negative, an INVALID_ARGUMENT is returned. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_search_request_facet_spec import GoogleCloudRetailV2betaSearchRequestFacetSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaSearchRequestFacetSpec from a JSON string
google_cloud_retail_v2beta_search_request_facet_spec_instance = GoogleCloudRetailV2betaSearchRequestFacetSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaSearchRequestFacetSpec.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_search_request_facet_spec_dict = google_cloud_retail_v2beta_search_request_facet_spec_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaSearchRequestFacetSpec from a dict
google_cloud_retail_v2beta_search_request_facet_spec_from_dict = GoogleCloudRetailV2betaSearchRequestFacetSpec.from_dict(google_cloud_retail_v2beta_search_request_facet_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


