# PromotionsReportPagedCollection

This type defines the fields in a paginated result set of promotion-level reports. The response consists of 0 or more sequenced pages that are returned from the complete <i>result set</i>, where each page consists of 0 or more items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The URI of the current page of results from the result set. | [optional] 
**limit** | **int** | The number of items returned on a single page from the result set. This value can be set in the request with the &lt;b&gt;limit&lt;/b&gt; query parameter. | [optional] 
**next** | **str** | The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. &lt;br&gt;&lt;br&gt;&lt;b&gt;Max length&lt;/b&gt;: 2048 | [optional] 
**offset** | **int** | The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the &lt;b&gt;offset&lt;/b&gt; query parameter. &lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note: &lt;/strong&gt;The items in a paginated result set use a zero-based list where the first item in the list has an offset of &lt;code&gt;0&lt;/code&gt;.&lt;/p&gt; | [optional] 
**prev** | **str** | The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. &lt;br&gt;&lt;br&gt;&lt;b&gt;Max length&lt;/b&gt;: 2048 | [optional] 
**promotion_reports** | [**List[PromotionReportDetail]**](PromotionReportDetail.md) | A list of &lt;b&gt;promotionReports&lt;/b&gt; contained in the paginated result set. | [optional] 
**total** | **int** | The total number of items retrieved in the result set.  &lt;br&gt;&lt;br&gt;If no items are found, this field is returned with a value of &lt;code&gt;0&lt;/code&gt;. | [optional] 

## Example

```python
from openapi_client.models.promotions_report_paged_collection import PromotionsReportPagedCollection

# TODO update the JSON string below
json = "{}"
# create an instance of PromotionsReportPagedCollection from a JSON string
promotions_report_paged_collection_instance = PromotionsReportPagedCollection.from_json(json)
# print the JSON string representation of the object
print(PromotionsReportPagedCollection.to_json())

# convert the object into a dict
promotions_report_paged_collection_dict = promotions_report_paged_collection_instance.to_dict()
# create an instance of PromotionsReportPagedCollection from a dict
promotions_report_paged_collection_from_dict = PromotionsReportPagedCollection.from_dict(promotions_report_paged_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


