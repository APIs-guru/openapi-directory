# GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFacetKey

Specifies how a facet is computed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_insensitive** | **bool** | True to make facet keys case insensitive when getting faceting values with prefixes or contains; false otherwise. | [optional] 
**contains** | **List[str]** | Only get facet values that contains the given strings. For example, suppose \&quot;category\&quot; has three values \&quot;Action &gt; 2022\&quot;, \&quot;Action &gt; 2021\&quot; and \&quot;Sci-Fi &gt; 2022\&quot;. If set \&quot;contains\&quot; to \&quot;2022\&quot;, the \&quot;category\&quot; facet only contains \&quot;Action &gt; 2022\&quot; and \&quot;Sci-Fi &gt; 2022\&quot;. Only supported on textual fields. Maximum is 10. | [optional] 
**intervals** | [**List[GoogleCloudDiscoveryengineV1betaInterval]**](GoogleCloudDiscoveryengineV1betaInterval.md) | Set only if values should be bucketed into intervals. Must be set for facets with numerical values. Must not be set for facet with text values. Maximum number of intervals is 30. | [optional] 
**key** | **str** | Required. Supported textual and numerical facet keys in Document object, over which the facet values are computed. Facet key is case-sensitive. | [optional] 
**order_by** | **str** | The order in which documents are returned. Allowed values are: * \&quot;count desc\&quot;, which means order by SearchResponse.Facet.values.count descending. * \&quot;value desc\&quot;, which means order by SearchResponse.Facet.values.value descending. Only applies to textual facets. If not set, textual values are sorted in [natural order](https://en.wikipedia.org/wiki/Natural_sort_order); numerical intervals are sorted in the order given by FacetSpec.FacetKey.intervals. | [optional] 
**prefixes** | **List[str]** | Only get facet values that start with the given string prefix. For example, suppose \&quot;category\&quot; has three values \&quot;Action &gt; 2022\&quot;, \&quot;Action &gt; 2021\&quot; and \&quot;Sci-Fi &gt; 2022\&quot;. If set \&quot;prefixes\&quot; to \&quot;Action\&quot;, the \&quot;category\&quot; facet only contains \&quot;Action &gt; 2022\&quot; and \&quot;Action &gt; 2021\&quot;. Only supported on textual fields. Maximum is 10. | [optional] 
**restricted_values** | **List[str]** | Only get facet for the given restricted values. Only supported on textual fields. For example, suppose \&quot;category\&quot; has three values \&quot;Action &gt; 2022\&quot;, \&quot;Action &gt; 2021\&quot; and \&quot;Sci-Fi &gt; 2022\&quot;. If set \&quot;restricted_values\&quot; to \&quot;Action &gt; 2022\&quot;, the \&quot;category\&quot; facet only contains \&quot;Action &gt; 2022\&quot;. Only supported on textual fields. Maximum is 10. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_search_request_facet_spec_facet_key import GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFacetKey

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFacetKey from a JSON string
google_cloud_discoveryengine_v1beta_search_request_facet_spec_facet_key_instance = GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFacetKey.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFacetKey.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_search_request_facet_spec_facet_key_dict = google_cloud_discoveryengine_v1beta_search_request_facet_spec_facet_key_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFacetKey from a dict
google_cloud_discoveryengine_v1beta_search_request_facet_spec_facet_key_from_dict = GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFacetKey.from_dict(google_cloud_discoveryengine_v1beta_search_request_facet_spec_facet_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


