# ReturnPolicyOnlineReturnReasonCategoryInfo

The return reason category info wrapper.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**return_label_source** | **str** | The corresponding return label source. | [optional] 
**return_reason_category** | **str** | The return reason category. | [optional] 
**return_shipping_fee** | [**ReturnPolicyOnlineReturnShippingFee**](ReturnPolicyOnlineReturnShippingFee.md) |  | [optional] 

## Example

```python
from openapi_client.models.return_policy_online_return_reason_category_info import ReturnPolicyOnlineReturnReasonCategoryInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnPolicyOnlineReturnReasonCategoryInfo from a JSON string
return_policy_online_return_reason_category_info_instance = ReturnPolicyOnlineReturnReasonCategoryInfo.from_json(json)
# print the JSON string representation of the object
print(ReturnPolicyOnlineReturnReasonCategoryInfo.to_json())

# convert the object into a dict
return_policy_online_return_reason_category_info_dict = return_policy_online_return_reason_category_info_instance.to_dict()
# create an instance of ReturnPolicyOnlineReturnReasonCategoryInfo from a dict
return_policy_online_return_reason_category_info_from_dict = ReturnPolicyOnlineReturnReasonCategoryInfo.from_dict(return_policy_online_return_reason_category_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


