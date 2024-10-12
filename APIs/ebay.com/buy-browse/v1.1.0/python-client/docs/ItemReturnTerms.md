# ItemReturnTerms

The type that defines the fields for the seller's return policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extended_holiday_returns_offered** | **bool** | This indicates if the seller has enabled the Extended Holiday Returns feature on the item. Extended Holiday Returns are only applicable during the US holiday season, and gives buyers extra time to return an item. This &#39;extra time&#39; will typically extend beyond what is set through the returnPeriod value. | [optional] 
**refund_method** | **str** | An enumeration value that indicates how a buyer is refunded when an item is returned. Valid Values: MONEY_BACK or MERCHANDISE_CREDIT Code so that your app gracefully handles any future changes to this list. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/gct:RefundMethodEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**restocking_fee_percentage** | **str** | This string field indicates the restocking fee percentage that the seller has set on the item. Sellers have the option of setting no restocking fee for an item, or they can set the percentage to 10, 15, or 20 percent. So, if the cost of the item was $100, and the restocking percentage was 20 percent, the buyer would be charged $20 to return that item, so instead of receiving a $100 refund, they would receive $80 due to the restocking fee. | [optional] 
**return_instructions** | **str** | Text written by the seller describing what the buyer needs to do in order to return the item. | [optional] 
**return_method** | **str** | An enumeration value that indicates the alternative methods for a full refund when an item is returned. This field is returned if the seller offers the buyer an item replacement or exchange instead of a monetary refund. Valid Values: REPLACEMENT - Indicates that the buyer has the option of receiving money back for the returned item, or they can choose to have the seller replace the item with an identical item. EXCHANGE - Indicates that the buyer has the option of receiving money back for the returned item, or they can exchange the item for another similar item. Code so that your app gracefully handles any future changes to this list. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/gct:ReturnMethodEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**return_period** | [**TimeDuration**](TimeDuration.md) |  | [optional] 
**return_shipping_cost_payer** | **str** | This enumeration value indicates whether the buyer or seller is responsible for return shipping costs when an item is returned. Valid Values: SELLER - Indicates the seller will pay for the shipping costs to return the item. BUYER - Indicates the buyer will pay for the shipping costs to return the item. Code so that your app gracefully handles any future changes to this list. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/gct:ReturnShippingCostPayerEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**returns_accepted** | **bool** | Indicates whether the seller accepts returns for the item. | [optional] 

## Example

```python
from openapi_client.models.item_return_terms import ItemReturnTerms

# TODO update the JSON string below
json = "{}"
# create an instance of ItemReturnTerms from a JSON string
item_return_terms_instance = ItemReturnTerms.from_json(json)
# print the JSON string representation of the object
print(ItemReturnTerms.to_json())

# convert the object into a dict
item_return_terms_dict = item_return_terms_instance.to_dict()
# create an instance of ItemReturnTerms from a dict
item_return_terms_from_dict = ItemReturnTerms.from_dict(item_return_terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


