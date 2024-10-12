# OrderReturn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor** | **str** | The actor that created the refund. Acceptable values are: - \&quot;&#x60;customer&#x60;\&quot; - \&quot;&#x60;googleBot&#x60;\&quot; - \&quot;&#x60;googleCustomerService&#x60;\&quot; - \&quot;&#x60;googlePayments&#x60;\&quot; - \&quot;&#x60;googleSabre&#x60;\&quot; - \&quot;&#x60;merchant&#x60;\&quot;  | [optional] 
**creation_date** | **str** | Date on which the item has been created, in ISO 8601 format. | [optional] 
**quantity** | **int** | Quantity that is returned. | [optional] 
**reason** | **str** | The reason for the return. Acceptable values are: - \&quot;&#x60;customerDiscretionaryReturn&#x60;\&quot; - \&quot;&#x60;customerInitiatedMerchantCancel&#x60;\&quot; - \&quot;&#x60;deliveredTooLate&#x60;\&quot; - \&quot;&#x60;expiredItem&#x60;\&quot; - \&quot;&#x60;invalidCoupon&#x60;\&quot; - \&quot;&#x60;malformedShippingAddress&#x60;\&quot; - \&quot;&#x60;other&#x60;\&quot; - \&quot;&#x60;productArrivedDamaged&#x60;\&quot; - \&quot;&#x60;productNotAsDescribed&#x60;\&quot; - \&quot;&#x60;qualityNotAsExpected&#x60;\&quot; - \&quot;&#x60;undeliverableShippingAddress&#x60;\&quot; - \&quot;&#x60;unsupportedPoBoxAddress&#x60;\&quot; - \&quot;&#x60;wrongProductShipped&#x60;\&quot;  | [optional] 
**reason_text** | **str** | The explanation of the reason. | [optional] 

## Example

```python
from openapi_client.models.order_return import OrderReturn

# TODO update the JSON string below
json = "{}"
# create an instance of OrderReturn from a JSON string
order_return_instance = OrderReturn.from_json(json)
# print the JSON string representation of the object
print(OrderReturn.to_json())

# convert the object into a dict
order_return_dict = order_return_instance.to_dict()
# create an instance of OrderReturn from a dict
order_return_from_dict = OrderReturn.from_dict(order_return_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


