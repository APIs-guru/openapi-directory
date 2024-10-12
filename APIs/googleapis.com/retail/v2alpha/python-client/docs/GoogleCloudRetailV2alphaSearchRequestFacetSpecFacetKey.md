# GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey

Specifies how a facet is computed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_insensitive** | **bool** | True to make facet keys case insensitive when getting faceting values with prefixes or contains; false otherwise. | [optional] 
**contains** | **List[str]** | Only get facet values that contains the given strings. For example, suppose \&quot;categories\&quot; has three values \&quot;Women &gt; Shoe\&quot;, \&quot;Women &gt; Dress\&quot; and \&quot;Men &gt; Shoe\&quot;. If set \&quot;contains\&quot; to \&quot;Shoe\&quot;, the \&quot;categories\&quot; facet gives only \&quot;Women &gt; Shoe\&quot; and \&quot;Men &gt; Shoe\&quot;. Only supported on textual fields. Maximum is 10. | [optional] 
**intervals** | [**List[GoogleCloudRetailV2alphaInterval]**](GoogleCloudRetailV2alphaInterval.md) | Set only if values should be bucketized into intervals. Must be set for facets with numerical values. Must not be set for facet with text values. Maximum number of intervals is 40. For all numerical facet keys that appear in the list of products from the catalog, the percentiles 0, 10, 30, 50, 70, 90, and 100 are computed from their distribution weekly. If the model assigns a high score to a numerical facet key and its intervals are not specified in the search request, these percentiles become the bounds for its intervals and are returned in the response. If the facet key intervals are specified in the request, then the specified intervals are returned instead. | [optional] 
**key** | **str** | Required. Supported textual and numerical facet keys in Product object, over which the facet values are computed. Facet key is case-sensitive. Allowed facet keys when FacetKey.query is not specified: * textual_field &#x3D; * \&quot;brands\&quot; * \&quot;categories\&quot; * \&quot;genders\&quot; * \&quot;ageGroups\&quot; * \&quot;availability\&quot; * \&quot;colorFamilies\&quot; * \&quot;colors\&quot; * \&quot;sizes\&quot; * \&quot;materials\&quot; * \&quot;patterns\&quot; * \&quot;conditions\&quot; * \&quot;attributes.key\&quot; * \&quot;pickupInStore\&quot; * \&quot;shipToStore\&quot; * \&quot;sameDayDelivery\&quot; * \&quot;nextDayDelivery\&quot; * \&quot;customFulfillment1\&quot; * \&quot;customFulfillment2\&quot; * \&quot;customFulfillment3\&quot; * \&quot;customFulfillment4\&quot; * \&quot;customFulfillment5\&quot; * \&quot;inventory(place_id,attributes.key)\&quot; * numerical_field &#x3D; * \&quot;price\&quot; * \&quot;discount\&quot; * \&quot;rating\&quot; * \&quot;ratingCount\&quot; * \&quot;attributes.key\&quot; * \&quot;inventory(place_id,price)\&quot; * \&quot;inventory(place_id,original_price)\&quot; * \&quot;inventory(place_id,attributes.key)\&quot; | [optional] 
**order_by** | **str** | The order in which SearchResponse.Facet.values are returned. Allowed values are: * \&quot;count desc\&quot;, which means order by SearchResponse.Facet.values.count descending. * \&quot;value desc\&quot;, which means order by SearchResponse.Facet.values.value descending. Only applies to textual facets. If not set, textual values are sorted in [natural order](https://en.wikipedia.org/wiki/Natural_sort_order); numerical intervals are sorted in the order given by FacetSpec.FacetKey.intervals; FulfillmentInfo.place_ids are sorted in the order given by FacetSpec.FacetKey.restricted_values. | [optional] 
**prefixes** | **List[str]** | Only get facet values that start with the given string prefix. For example, suppose \&quot;categories\&quot; has three values \&quot;Women &gt; Shoe\&quot;, \&quot;Women &gt; Dress\&quot; and \&quot;Men &gt; Shoe\&quot;. If set \&quot;prefixes\&quot; to \&quot;Women\&quot;, the \&quot;categories\&quot; facet gives only \&quot;Women &gt; Shoe\&quot; and \&quot;Women &gt; Dress\&quot;. Only supported on textual fields. Maximum is 10. | [optional] 
**query** | **str** | The query that is used to compute facet for the given facet key. When provided, it overrides the default behavior of facet computation. The query syntax is the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Notice that there is no limitation on FacetKey.key when query is specified. In the response, SearchResponse.Facet.values.value is always \&quot;1\&quot; and SearchResponse.Facet.values.count is the number of results that match the query. For example, you can set a customized facet for \&quot;shipToStore\&quot;, where FacetKey.key is \&quot;customizedShipToStore\&quot;, and FacetKey.query is \&quot;availability: ANY(\\\&quot;IN_STOCK\\\&quot;) AND shipToStore: ANY(\\\&quot;123\\\&quot;)\&quot;. Then the facet counts the products that are both in stock and ship to store \&quot;123\&quot;. | [optional] 
**restricted_values** | **List[str]** | Only get facet for the given restricted values. For example, when using \&quot;pickupInStore\&quot; as key and set restricted values to [\&quot;store123\&quot;, \&quot;store456\&quot;], only facets for \&quot;store123\&quot; and \&quot;store456\&quot; are returned. Only supported on predefined textual fields, custom textual attributes and fulfillments. Maximum is 20. Must be set for the fulfillment facet keys: * pickupInStore * shipToStore * sameDayDelivery * nextDayDelivery * customFulfillment1 * customFulfillment2 * customFulfillment3 * customFulfillment4 * customFulfillment5 | [optional] 
**return_min_max** | **bool** | Returns the min and max value for each numerical facet intervals. Ignored for textual facets. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_search_request_facet_spec_facet_key import GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey from a JSON string
google_cloud_retail_v2alpha_search_request_facet_spec_facet_key_instance = GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_search_request_facet_spec_facet_key_dict = google_cloud_retail_v2alpha_search_request_facet_spec_facet_key_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey from a dict
google_cloud_retail_v2alpha_search_request_facet_spec_facet_key_from_dict = GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey.from_dict(google_cloud_retail_v2alpha_search_request_facet_spec_facet_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


