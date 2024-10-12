# ProductSearchResponse

This type contains the specifications for the collection of products that match the search or filter criteria of a <b>search</b> call. A maximum of 200 product summaries is returned (the result set), fewer if you include the <b>limit</b> query parameter in the request. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | This field is reserved for internal or future use. &lt;!-- The URI of the &lt;b&gt;search&lt;/b&gt; method request that produced this result set. --&gt; | [optional] 
**limit** | **int** | The number of product summaries returned in the response. This is the &lt;i&gt;result set&lt;/i&gt;, a subset of the full collection of products that match the search or filter criteria of this call. If the &lt;b&gt;limit&lt;/b&gt; query parameter was included in the request, this field will have the same value. &lt;br /&gt;&lt;br /&gt; &lt;b&gt;Default:&lt;/b&gt; &lt;code&gt;50&lt;/code&gt; | [optional] 
**next** | **str** | This field is reserved for internal or future use. &lt;!-- &lt;i&gt;Returned only if&lt;/i&gt; there are more product records to retrieve from the current collection of matching products, this field contains the &lt;b&gt;search&lt;/b&gt; call URI for the next result set. For example, the following URI returns records 41 thru 50 from the collection of matched products: &lt;br /&gt;&lt;br /&gt; &lt;code&gt;&lt;i&gt;path&lt;/i&gt;/product_summary/search?limit&#x3D;10&amp;offset&#x3D;40&lt;/code&gt; &lt;br /&gt;&lt;br /&gt;  &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; This feature employs a zero-based list, where the first product in the list has an offset of &lt;code&gt;0&lt;/code&gt;.&lt;/span&gt; --&gt; | [optional] 
**offset** | **int** | This field is reserved for internal or future use. &lt;!-- The distance (number of records) from the first product in the collection to the first product in this result set. If the &lt;b&gt;offset&lt;/b&gt; query parameter was included in the request, this field will have the same value. The &lt;b&gt;offset&lt;/b&gt; value is used in conjunction with the &lt;b&gt;limit&lt;/b&gt; value to control the pagination of the output. For example, if &lt;b&gt;offset&lt;/b&gt; is set to &lt;code&gt;30&lt;/code&gt; and &lt;b&gt;limit&lt;/b&gt; is set to &lt;code&gt;10&lt;/code&gt;, the call retrieves products 31 thru 40 from the resulting collection of products. &lt;br /&gt;&lt;br /&gt;  &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; This feature employs a zero-based list, where the first item in the list has an offset of &lt;code&gt;0&lt;/code&gt;.&lt;/span&gt; &lt;br /&gt;&lt;br /&gt; &lt;b&gt;Default:&lt;/b&gt; &lt;code&gt;0&lt;/code&gt; (zero) --&gt; | [optional] 
**prev** | **str** | This field is reserved for internal or future use.  !-- &lt;i&gt;Not returned if&lt;/i&gt; the currently returned result set is the first set of product records from the current collection of matching products. This field contains the &lt;b&gt;search&lt;/b&gt; call URI for the previous result set. For example, the following URI returns products 21 thru 30 from the collection of products: &lt;br /&gt;&lt;br /&gt; &lt;code&gt;&lt;i&gt;path&lt;/i&gt;/product_summary/search?limit&#x3D;10&amp;offset&#x3D;20&lt;/code&gt; &lt;br /&gt;&lt;br /&gt;  &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; This feature employs a zero-based list, where the first product in the list has an offset of &lt;code&gt;0&lt;/code&gt;.&lt;/span&gt; &gt; | [optional] 
**product_summaries** | [**List[ProductSummary]**](ProductSummary.md) | &lt;i&gt;Returned if&lt;/i&gt; the &lt;b&gt;fieldGroups&lt;/b&gt; query parameter was omitted from the request, or if it was included with a value of &lt;code&gt;MATCHING_PRODUCTS&lt;/code&gt; or &lt;code&gt;FULL&lt;/code&gt;. This container provides an array of product summaries in the current result set for products that match the combination of the &lt;b&gt;q&lt;/b&gt;, &lt;b&gt;category_ids&lt;/b&gt;, and &lt;b&gt;aspect_filter&lt;/b&gt; parameters that were provided in the request. Each product summary includes information about the product&#39;s identifiers, product images, aspects, the product page URL, and the &lt;b&gt;getProduct&lt;/b&gt; URL for retrieving the product details. | [optional] 
**refinement** | [**Refinement**](Refinement.md) |  | [optional] 
**total** | **int** | This field is reserved for internal or future use. &lt;!-- The total number of product records in the returned collection of matched products. &gt; | [optional] 

## Example

```python
from openapi_client.models.product_search_response import ProductSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSearchResponse from a JSON string
product_search_response_instance = ProductSearchResponse.from_json(json)
# print the JSON string representation of the object
print(ProductSearchResponse.to_json())

# convert the object into a dict
product_search_response_dict = product_search_response_instance.to_dict()
# create an instance of ProductSearchResponse from a dict
product_search_response_from_dict = ProductSearchResponse.from_dict(product_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


