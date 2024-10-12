# ReturnPricingInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charge_return_shipping_fee** | **bool** | Default option for whether merchant should charge the customer for return shipping costs, based on customer selected return reason and merchant&#39;s return policy for the items being returned. | [optional] 
**max_return_shipping_fee** | [**MonetaryAmount**](MonetaryAmount.md) |  | [optional] 
**refundable_items_total_amount** | [**MonetaryAmount**](MonetaryAmount.md) |  | [optional] 
**refundable_shipping_amount** | [**MonetaryAmount**](MonetaryAmount.md) |  | [optional] 
**total_refunded_amount** | [**MonetaryAmount**](MonetaryAmount.md) |  | [optional] 

## Example

```python
from openapi_client.models.return_pricing_info import ReturnPricingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnPricingInfo from a JSON string
return_pricing_info_instance = ReturnPricingInfo.from_json(json)
# print the JSON string representation of the object
print(ReturnPricingInfo.to_json())

# convert the object into a dict
return_pricing_info_dict = return_pricing_info_instance.to_dict()
# create an instance of ReturnPricingInfo from a dict
return_pricing_info_from_dict = ReturnPricingInfo.from_dict(return_pricing_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


