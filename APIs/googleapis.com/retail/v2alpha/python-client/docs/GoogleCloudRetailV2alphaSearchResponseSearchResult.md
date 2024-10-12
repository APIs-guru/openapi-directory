# GoogleCloudRetailV2alphaSearchResponseSearchResult

Represents the search results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Product.id of the searched Product. | [optional] 
**matching_variant_count** | **int** | The count of matched variant Products. | [optional] 
**matching_variant_fields** | **Dict[str, str]** | If a variant Product matches the search query, this map indicates which Product fields are matched. The key is the Product.name, the value is a field mask of the matched Product fields. If matched attributes cannot be determined, this map will be empty. For example, a key \&quot;sku1\&quot; with field mask \&quot;products.color_info\&quot; indicates there is a match between \&quot;sku1\&quot; ColorInfo and the query. | [optional] 
**personal_labels** | **List[str]** | Specifies previous events related to this product for this user based on UserEvent with same SearchRequest.visitor_id or UserInfo.user_id. This is set only when SearchRequest.PersonalizationSpec.mode is SearchRequest.PersonalizationSpec.Mode.AUTO. Possible values: * &#x60;purchased&#x60;: Indicates that this product has been purchased before. | [optional] 
**product** | [**GoogleCloudRetailV2alphaProduct**](GoogleCloudRetailV2alphaProduct.md) |  | [optional] 
**variant_rollup_values** | **Dict[str, object]** | The rollup matching variant Product attributes. The key is one of the SearchRequest.variant_rollup_keys. The values are the merged and de-duplicated Product attributes. Notice that the rollup values are respect filter. For example, when filtering by \&quot;colorFamilies:ANY(\\\&quot;red\\\&quot;)\&quot; and rollup \&quot;colorFamilies\&quot;, only \&quot;red\&quot; is returned. For textual and numerical attributes, the rollup values is a list of string or double values with type google.protobuf.ListValue. For example, if there are two variants with colors \&quot;red\&quot; and \&quot;blue\&quot;, the rollup values are { key: \&quot;colorFamilies\&quot; value { list_value { values { string_value: \&quot;red\&quot; } values { string_value: \&quot;blue\&quot; } } } } For FulfillmentInfo, the rollup values is a double value with type google.protobuf.Value. For example, &#x60;{key: \&quot;pickupInStore.store1\&quot; value { number_value: 10 }}&#x60; means a there are 10 variants in this product are available in the store \&quot;store1\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_search_response_search_result import GoogleCloudRetailV2alphaSearchResponseSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaSearchResponseSearchResult from a JSON string
google_cloud_retail_v2alpha_search_response_search_result_instance = GoogleCloudRetailV2alphaSearchResponseSearchResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaSearchResponseSearchResult.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_search_response_search_result_dict = google_cloud_retail_v2alpha_search_response_search_result_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaSearchResponseSearchResult from a dict
google_cloud_retail_v2alpha_search_response_search_result_from_dict = GoogleCloudRetailV2alphaSearchResponseSearchResult.from_dict(google_cloud_retail_v2alpha_search_response_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


