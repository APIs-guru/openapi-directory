# ReturnPolicyOnlineRestockingFee

The restocking fee. This can either be a fixed fee or a micro percent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_fee** | [**PriceAmount**](PriceAmount.md) |  | [optional] 
**micro_percent** | **int** | Percent of total price in micros. 15,000,000 means 15% of the total price would be charged. | [optional] 

## Example

```python
from openapi_client.models.return_policy_online_restocking_fee import ReturnPolicyOnlineRestockingFee

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnPolicyOnlineRestockingFee from a JSON string
return_policy_online_restocking_fee_instance = ReturnPolicyOnlineRestockingFee.from_json(json)
# print the JSON string representation of the object
print(ReturnPolicyOnlineRestockingFee.to_json())

# convert the object into a dict
return_policy_online_restocking_fee_dict = return_policy_online_restocking_fee_instance.to_dict()
# create an instance of ReturnPolicyOnlineRestockingFee from a dict
return_policy_online_restocking_fee_from_dict = ReturnPolicyOnlineRestockingFee.from_dict(return_policy_online_restocking_fee_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


