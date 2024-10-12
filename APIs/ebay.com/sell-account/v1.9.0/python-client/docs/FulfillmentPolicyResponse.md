# FulfillmentPolicyResponse

The response payload for the <b>getFulfillmentPolicies</b> method.<br /><br /><span class=\"tablenote\"><b>Note</b>: Pagination has not yet been enabled for <b>getFulfillmentPolicies</b>, so all of the pagination-related fields are for future use.</span>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fulfillment_policies** | [**List[FulfillmentPolicy]**](FulfillmentPolicy.md) | A list of all of the seller&#39;s fulfillment policies defined for the specified marketplace. This array will be returned as empty if no fulfillment policies are defined for the specified marketplace. | [optional] 
**href** | **str** | This field is for future use. | [optional] 
**limit** | **int** | This field is for future use. | [optional] 
**next** | **str** | This field is for future use. | [optional] 
**offset** | **int** | This field is for future use. | [optional] 
**prev** | **str** | This field is for future use. | [optional] 
**total** | **int** | The total number of fulfillment policies retrieved in the result set.  &lt;br/&gt;&lt;br/&gt;If no fulfillment policies are defined for the specified marketplace, this field is returned with a value of &lt;code&gt;0&lt;/code&gt;. | [optional] 

## Example

```python
from openapi_client.models.fulfillment_policy_response import FulfillmentPolicyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FulfillmentPolicyResponse from a JSON string
fulfillment_policy_response_instance = FulfillmentPolicyResponse.from_json(json)
# print the JSON string representation of the object
print(FulfillmentPolicyResponse.to_json())

# convert the object into a dict
fulfillment_policy_response_dict = fulfillment_policy_response_instance.to_dict()
# create an instance of FulfillmentPolicyResponse from a dict
fulfillment_policy_response_from_dict = FulfillmentPolicyResponse.from_dict(fulfillment_policy_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


