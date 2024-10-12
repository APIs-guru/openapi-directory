# PromotionReportDetail

This type defines the fields in a promotion-level report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_item_discount** | [**Amount**](Amount.md) |  | [optional] 
**average_item_revenue** | [**Amount**](Amount.md) |  | [optional] 
**average_order_discount** | [**Amount**](Amount.md) |  | [optional] 
**average_order_revenue** | [**Amount**](Amount.md) |  | [optional] 
**average_order_size** | **str** | The &lt;i&gt;average order size&lt;/i&gt; is the average number of items that each order contained in a promotion. This value is calculated as follows:  &lt;br&gt;&lt;br&gt;&lt;b&gt;itemsSoldQuantity&lt;/b&gt; / &lt;b&gt;numberOfOrdersSold&lt;/b&gt; &#x3D; &lt;b&gt;averageOrderSize&lt;/b&gt;  | [optional] 
**base_sale** | [**Amount**](Amount.md) |  | [optional] 
**items_sold_quantity** | **int** | This is the quantity of items purchased in a threshold promotion where the threshold &lt;i&gt;has been met&lt;/i&gt; and the discount was applied. &lt;br&gt;&lt;br&gt;For example, suppose you&#39;re running a \&quot;Buy 1, get 1 at 50%\&quot; promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your number of items sold (&lt;b&gt;itemsSoldQuantity&lt;/b&gt;) would be 2 and you number of orders sold (&lt;b&gt;numberOfOrdersSold&lt;/b&gt;) would be 1. | [optional] 
**number_of_orders_sold** | **int** | This is the number of orders sold in a threshold promotion where the threshold &lt;i&gt;has been met&lt;/i&gt; and the discount was applied. &lt;br&gt;&lt;br&gt;For example, suppose you&#39;re running a \&quot;Buy 1, get 1 at 50%\&quot; promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your &lt;b&gt;numberOfOrdersSold&lt;/b&gt; would be 1 and your &lt;b&gt;itemsSoldQuantity&lt;/b&gt; would be 2. | [optional] 
**percentage_sales_lift** | **str** | The &lt;i&gt;percentage sales lift&lt;/i&gt; is the total dollar amount gained due to promotions. This value is calculated as follows:  &lt;br&gt;&lt;br&gt; &lt;b&gt;promotionSale&lt;/b&gt; / &lt;b&gt;totalSale&lt;/b&gt; &#x3D;  &lt;b&gt;percentageSalesLift&lt;/b&gt;  | [optional] 
**promotion_href** | **str** | The URI of the promotion report. | [optional] 
**promotion_id** | **str** | A unique eBay-assigned ID for the promotion that&#39;s generated when the promotion is created. | [optional] 
**promotion_report_id** | **str** | The unique eBay-assigned ID of the promotion report that is generated when the report is created. | [optional] 
**promotion_sale** | [**Amount**](Amount.md) |  | [optional] 
**promotion_type** | **str** | Indicates the type of the promotion, either &lt;code&gt;CODED_COUPON&lt;/code&gt;, &lt;code&gt;MARKDOWN_SALE&lt;/code&gt;, &lt;code&gt;ORDER_DISCOUNT&lt;/code&gt;, or &lt;code&gt;VOLUME_DISCOUNT&lt;/code&gt;. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**total_discount** | [**Amount**](Amount.md) |  | [optional] 
**total_sale** | [**Amount**](Amount.md) |  | [optional] 

## Example

```python
from openapi_client.models.promotion_report_detail import PromotionReportDetail

# TODO update the JSON string below
json = "{}"
# create an instance of PromotionReportDetail from a JSON string
promotion_report_detail_instance = PromotionReportDetail.from_json(json)
# print the JSON string representation of the object
print(PromotionReportDetail.to_json())

# convert the object into a dict
promotion_report_detail_dict = promotion_report_detail_instance.to_dict()
# create an instance of PromotionReportDetail from a dict
promotion_report_detail_from_dict = PromotionReportDetail.from_dict(promotion_report_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


