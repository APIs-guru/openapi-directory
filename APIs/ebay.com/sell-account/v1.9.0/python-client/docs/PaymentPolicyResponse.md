# PaymentPolicyResponse

The response payload for the <b>getPaymentPolicies</b> method. <br /><br /><span class=\"tablenote\"><b>Note</b>: Pagination has not yet been enabled for <b>getPaymentPolicies</b>, so all of the pagination-related fields are for future use.</span>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | This field is for future use. | [optional] 
**limit** | **int** | This field is for future use. | [optional] 
**next** | **str** | This field is for future use. | [optional] 
**offset** | **int** | This field is for future use. | [optional] 
**payment_policies** | [**List[PaymentPolicy]**](PaymentPolicy.md) | A list of all of the seller&#39;s payment business policies defined for the specified marketplace. This array will be returned as empty if no payment business policies are defined for the specified marketplace. | [optional] 
**prev** | **str** | This field is for future use. | [optional] 
**total** | **int** | The total number of payment business policies retrieved in the result set.  &lt;br/&gt;&lt;br/&gt;If no payment business policies are defined for the specified marketplace, this field is returned with a value of &lt;code&gt;0&lt;/code&gt;. | [optional] 

## Example

```python
from openapi_client.models.payment_policy_response import PaymentPolicyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentPolicyResponse from a JSON string
payment_policy_response_instance = PaymentPolicyResponse.from_json(json)
# print the JSON string representation of the object
print(PaymentPolicyResponse.to_json())

# convert the object into a dict
payment_policy_response_dict = payment_policy_response_instance.to_dict()
# create an instance of PaymentPolicyResponse from a dict
payment_policy_response_from_dict = PaymentPolicyResponse.from_dict(payment_policy_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


