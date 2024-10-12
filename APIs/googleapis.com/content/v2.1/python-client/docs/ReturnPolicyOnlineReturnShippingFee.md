# ReturnPolicyOnlineReturnShippingFee

The return shipping fee. This can either be a fixed fee or a boolean to indicate that the customer pays the actual shipping cost.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_fee** | [**PriceAmount**](PriceAmount.md) |  | [optional] 
**type** | **str** | Type of return shipping fee. | [optional] 

## Example

```python
from openapi_client.models.return_policy_online_return_shipping_fee import ReturnPolicyOnlineReturnShippingFee

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnPolicyOnlineReturnShippingFee from a JSON string
return_policy_online_return_shipping_fee_instance = ReturnPolicyOnlineReturnShippingFee.from_json(json)
# print the JSON string representation of the object
print(ReturnPolicyOnlineReturnShippingFee.to_json())

# convert the object into a dict
return_policy_online_return_shipping_fee_dict = return_policy_online_return_shipping_fee_instance.to_dict()
# create an instance of ReturnPolicyOnlineReturnShippingFee from a dict
return_policy_online_return_shipping_fee_from_dict = ReturnPolicyOnlineReturnShippingFee.from_dict(return_policy_online_return_shipping_fee_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


