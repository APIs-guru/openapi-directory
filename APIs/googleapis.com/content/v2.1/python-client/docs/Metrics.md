# Metrics

Performance metrics. Values are only set for metrics requested explicitly in the request's search query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aos** | **float** | Average order size - the average number of items in an order. **This metric cannot be segmented by product dimensions and customer_country_code.** | [optional] 
**aov_micros** | **float** | Average order value in micros (1 millionth of a standard unit, 1 USD &#x3D; 1000000 micros) - the average value (total price of items) of all placed orders. The currency of the returned value is stored in the currency_code segment. If this metric is selected, &#39;segments.currency_code&#39; is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by product dimensions and customer_country_code.** | [optional] 
**clicks** | **str** | Number of clicks. | [optional] 
**conversion_rate** | **float** | Number of conversions divided by the number of clicks, reported on the impression date. The metric is currently available only for the FREE_PRODUCT_LISTING program. | [optional] 
**conversion_value_micros** | **str** | Value of conversions in micros (1 millionth of a standard unit, 1 USD &#x3D; 1000000 micros) attributed to the product, reported on the conversion date. The metric is currently available only for the FREE_PRODUCT_LISTING program. The currency of the returned value is stored in the currency_code segment. If this metric is selected, &#39;segments.currency_code&#39; is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. | [optional] 
**conversions** | **float** | Number of conversions attributed to the product, reported on the conversion date. Depending on the attribution model, a conversion might be distributed across multiple clicks, where each click gets its own credit assigned. This metric is a sum of all such credits. The metric is currently available only for the FREE_PRODUCT_LISTING program. | [optional] 
**ctr** | **float** | Click-through rate - the number of clicks merchant&#39;s products receive (clicks) divided by the number of times the products are shown (impressions). | [optional] 
**days_to_ship** | **float** | Average number of days between an order being placed and the order being fully shipped, reported on the last shipment date. **This metric cannot be segmented by product dimensions and customer_country_code.** | [optional] 
**impressions** | **str** | Number of times merchant&#39;s products are shown. | [optional] 
**item_days_to_ship** | **float** | Average number of days between an item being ordered and the item being **This metric cannot be segmented by customer_country_code.** | [optional] 
**item_fill_rate** | **float** | Percentage of shipped items in relation to all finalized items (shipped or rejected by the merchant; unshipped items are not taken into account), reported on the order date. Item fill rate is lowered by merchant rejections. **This metric cannot be segmented by customer_country_code.** | [optional] 
**ordered_item_sales_micros** | **str** | Total price of ordered items in micros (1 millionth of a standard unit, 1 USD &#x3D; 1000000 micros). Excludes shipping, taxes (US only), and customer cancellations that happened within 30 minutes of placing the order. The currency of the returned value is stored in the currency_code segment. If this metric is selected, &#39;segments.currency_code&#39; is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.** | [optional] 
**ordered_items** | **str** | Number of ordered items. Excludes customer cancellations that happened within 30 minutes of placing the order. **This metric cannot be segmented by customer_country_code.** | [optional] 
**orders** | **str** | Number of placed orders. Excludes customer cancellations that happened within 30 minutes of placing the order. **This metric cannot be segmented by product dimensions and customer_country_code.** | [optional] 
**rejected_items** | **str** | Number of ordered items canceled by the merchant, reported on the order date. **This metric cannot be segmented by customer_country_code.** | [optional] 
**return_rate** | **float** | Total price of returned items divided by the total price of shipped items, reported on the order date. If this metric is selected, &#39;segments.currency_code&#39; is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.** | [optional] 
**returned_items** | **str** | Number of ordered items sent back for return, reported on the date when the merchant accepted the return. **This metric cannot be segmented by customer_country_code.** | [optional] 
**returns_micros** | **str** | Total price of ordered items sent back for return in micros (1 millionth of a standard unit, 1 USD &#x3D; 1000000 micros), reported on the date when the merchant accepted the return. The currency of the returned value is stored in the currency_code segment. If this metric is selected, &#39;segments.currency_code&#39; is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.** | [optional] 
**shipped_item_sales_micros** | **str** | Total price of shipped items in micros (1 millionth of a standard unit, 1 USD &#x3D; 1000000 micros), reported on the order date. Excludes shipping and taxes (US only). The currency of the returned value is stored in the currency_code segment. If this metric is selected, &#39;segments.currency_code&#39; is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.** | [optional] 
**shipped_items** | **str** | Number of shipped items, reported on the shipment date. **This metric cannot be segmented by customer_country_code.** | [optional] 
**shipped_orders** | **str** | Number of fully shipped orders, reported on the last shipment date. **This metric cannot be segmented by product dimensions and customer_country_code.** | [optional] 
**unshipped_items** | **float** | Number of ordered items not shipped up until the end of the queried day. If a multi-day period is specified in the search query, the returned value is the average number of unshipped items over the days in the queried period. **This metric cannot be segmented by customer_country_code.** | [optional] 
**unshipped_orders** | **float** | Number of orders not shipped or partially shipped up until the end of the queried day. If a multi-day period is specified in the search query, the returned value is the average number of unshipped orders over the days in the queried period. **This metric cannot be segmented by product dimensions and customer_country_code.** | [optional] 

## Example

```python
from openapi_client.models.metrics import Metrics

# TODO update the JSON string below
json = "{}"
# create an instance of Metrics from a JSON string
metrics_instance = Metrics.from_json(json)
# print the JSON string representation of the object
print(Metrics.to_json())

# convert the object into a dict
metrics_dict = metrics_instance.to_dict()
# create an instance of Metrics from a dict
metrics_from_dict = Metrics.from_dict(metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


