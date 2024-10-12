# GoogleCloudRetailV2SearchRequest

Request message for SearchService.Search method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boost_spec** | [**GoogleCloudRetailV2SearchRequestBoostSpec**](GoogleCloudRetailV2SearchRequestBoostSpec.md) |  | [optional] 
**branch** | **str** | The branch resource name, such as &#x60;projects/*/locations/global/catalogs/default_catalog/branches/0&#x60;. Use \&quot;default_branch\&quot; as the branch ID or leave this field empty, to search products under the default branch. | [optional] 
**canonical_filter** | **str** | The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. In the case a query does not have a sufficient amount of results this filter will be used to determine whether or not to enable the query expansion flow. The original filter will still be used for the query expanded search. This field is strongly recommended to achieve high search quality. For more information about filter syntax, see SearchRequest.filter. | [optional] 
**dynamic_facet_spec** | [**GoogleCloudRetailV2SearchRequestDynamicFacetSpec**](GoogleCloudRetailV2SearchRequestDynamicFacetSpec.md) |  | [optional] 
**entity** | **str** | The entity for customers that may run multiple different entities, domains, sites or regions, for example, &#x60;Google US&#x60;, &#x60;Google Ads&#x60;, &#x60;Waymo&#x60;, &#x60;google.com&#x60;, &#x60;youtube.com&#x60;, etc. If this is set, it should be exactly matched with UserEvent.entity to get search results boosted by entity. | [optional] 
**facet_specs** | [**List[GoogleCloudRetailV2SearchRequestFacetSpec]**](GoogleCloudRetailV2SearchRequestFacetSpec.md) | Facet specifications for faceted search. If empty, no facets are returned. A maximum of 200 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**filter** | **str** | The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. Filter expression is case-sensitive. For more information, see [Filter](https://cloud.google.com/retail/docs/filter-and-order#filter). If this field is unrecognizable, an INVALID_ARGUMENT is returned. | [optional] 
**labels** | **Dict[str, str]** | The labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. For more information, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) in the Resource Manager documentation. | [optional] 
**offset** | **int** | A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Products deemed by the API as relevant) in search results. This field is only considered if page_token is unset. If this field is negative, an INVALID_ARGUMENT is returned. | [optional] 
**order_by** | **str** | The order in which products are returned. Products can be ordered by a field in an Product object. Leave it unset if ordered by relevance. OrderBy expression is case-sensitive. For more information, see [Order](https://cloud.google.com/retail/docs/filter-and-order#order). If this field is unrecognizable, an INVALID_ARGUMENT is returned. | [optional] 
**page_categories** | **List[str]** | The categories associated with a category page. Must be set for category navigation queries to achieve good search quality. The format should be the same as UserEvent.page_categories; To represent full path of category, use &#39;&gt;&#39; sign to separate different hierarchies. If &#39;&gt;&#39; is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: \&quot;pageCategories\&quot; : [\&quot;Sales &gt; 2017 Black Friday Deals\&quot;]. | [optional] 
**page_size** | **int** | Maximum number of Products to return. If unspecified, defaults to a reasonable value. The maximum allowed value is 120. Values above 120 will be coerced to 120. If this field is negative, an INVALID_ARGUMENT is returned. | [optional] 
**page_token** | **str** | A page token SearchResponse.next_page_token, received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**personalization_spec** | [**GoogleCloudRetailV2SearchRequestPersonalizationSpec**](GoogleCloudRetailV2SearchRequestPersonalizationSpec.md) |  | [optional] 
**query** | **str** | Raw search query. If this field is empty, the request is considered a category browsing request and returned results are based on filter and page_categories. | [optional] 
**query_expansion_spec** | [**GoogleCloudRetailV2SearchRequestQueryExpansionSpec**](GoogleCloudRetailV2SearchRequestQueryExpansionSpec.md) |  | [optional] 
**search_mode** | **str** | The search mode of the search request. If not specified, a single search request triggers both product search and faceted search. | [optional] 
**spell_correction_spec** | [**GoogleCloudRetailV2SearchRequestSpellCorrectionSpec**](GoogleCloudRetailV2SearchRequestSpellCorrectionSpec.md) |  | [optional] 
**user_info** | [**GoogleCloudRetailV2UserInfo**](GoogleCloudRetailV2UserInfo.md) |  | [optional] 
**variant_rollup_keys** | **List[str]** | The keys to fetch and rollup the matching variant Products attributes, FulfillmentInfo or LocalInventorys attributes. The attributes from all the matching variant Products or LocalInventorys are merged and de-duplicated. Notice that rollup attributes will lead to extra query latency. Maximum number of keys is 30. For FulfillmentInfo, a fulfillment type and a fulfillment ID must be provided in the format of \&quot;fulfillmentType.fulfillmentId\&quot;. E.g., in \&quot;pickupInStore.store123\&quot;, \&quot;pickupInStore\&quot; is fulfillment type and \&quot;store123\&quot; is the store ID. Supported keys are: * colorFamilies * price * originalPrice * discount * variantId * inventory(place_id,price) * inventory(place_id,original_price) * inventory(place_id,attributes.key), where key is any key in the Product.local_inventories.attributes map. * attributes.key, where key is any key in the Product.attributes map. * pickupInStore.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type \&quot;pickup-in-store\&quot;. * shipToStore.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type \&quot;ship-to-store\&quot;. * sameDayDelivery.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type \&quot;same-day-delivery\&quot;. * nextDayDelivery.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type \&quot;next-day-delivery\&quot;. * customFulfillment1.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type \&quot;custom-type-1\&quot;. * customFulfillment2.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type \&quot;custom-type-2\&quot;. * customFulfillment3.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type \&quot;custom-type-3\&quot;. * customFulfillment4.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type \&quot;custom-type-4\&quot;. * customFulfillment5.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type \&quot;custom-type-5\&quot;. If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. | [optional] 
**visitor_id** | **str** | Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This should be the same identifier as UserEvent.visitor_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_search_request import GoogleCloudRetailV2SearchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2SearchRequest from a JSON string
google_cloud_retail_v2_search_request_instance = GoogleCloudRetailV2SearchRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2SearchRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2_search_request_dict = google_cloud_retail_v2_search_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2SearchRequest from a dict
google_cloud_retail_v2_search_request_from_dict = GoogleCloudRetailV2SearchRequest.from_dict(google_cloud_retail_v2_search_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


