# ShippingOptionSummary

The type that defines the fields for the shipping information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guaranteed_delivery** | **bool** | Indicates if the seller has committed to shipping the item with eBay Guaranteed Delivery. With eBay Guaranteed Delivery, the seller is committed to getting the line item to the buyer within 4 business days or less. See the Buying items with eBay Guaranteed Delivery help topic for more details about eBay Guaranteed Delivery. | [optional] 
**max_estimated_delivery_date** | **str** | The end date of the delivery window (latest projected delivery date). This value is returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ), which you can convert into the local time of the buyer. Note: For the best accuracy, always include the contextualLocation values in the X-EBAY-C-ENDUSERCTX request header. | [optional] 
**min_estimated_delivery_date** | **str** | The start date of the delivery window (earliest projected delivery date). This value is returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ), which you can convert into the local time of the buyer. Note: For the best accuracy, always include the contextualLocation values in the X-EBAY-C-ENDUSERCTX request header. | [optional] 
**shipping_cost** | [**ConvertedAmount**](ConvertedAmount.md) |  | [optional] 
**shipping_cost_type** | **str** | Indicates the type of shipping used to ship the item. Possible values are FIXED (flat-rate shipping) and CALCULATED (shipping cost calculated based on item and buyer location). | [optional] 

## Example

```python
from openapi_client.models.shipping_option_summary import ShippingOptionSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingOptionSummary from a JSON string
shipping_option_summary_instance = ShippingOptionSummary.from_json(json)
# print the JSON string representation of the object
print(ShippingOptionSummary.to_json())

# convert the object into a dict
shipping_option_summary_dict = shipping_option_summary_instance.to_dict()
# create an instance of ShippingOptionSummary from a dict
shipping_option_summary_from_dict = ShippingOptionSummary.from_dict(shipping_option_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


