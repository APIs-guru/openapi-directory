# ReturnPolicyResponse

The response payload for the <b>getReturnPolicies</b> method. <br /><br /><span class=\"tablenote\"><b>Note</b>: Pagination has not yet been enabled for <b>getReturnPolicies</b>, so all of the pagination-related fields are for future use.</span>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | This field is for future use. | [optional] 
**limit** | **int** | This field is for future use. | [optional] 
**next** | **str** | This field is for future use. | [optional] 
**offset** | **int** | This field is for future use. | [optional] 
**prev** | **str** | This field is for future use. | [optional] 
**return_policies** | [**List[ReturnPolicy]**](ReturnPolicy.md) | A list of all of the seller&#39;s return business policies defined for the specified marketplace. This array will be returned as empty if no return business policies are defined for the specified marketplace. | [optional] 
**total** | **int** | The total number of return business policies retrieved in the result set.  &lt;br/&gt;&lt;br/&gt;If no return business policies are defined for the specified marketplace, this field is returned with a value of &lt;code&gt;0&lt;/code&gt;. | [optional] 

## Example

```python
from openapi_client.models.return_policy_response import ReturnPolicyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnPolicyResponse from a JSON string
return_policy_response_instance = ReturnPolicyResponse.from_json(json)
# print the JSON string representation of the object
print(ReturnPolicyResponse.to_json())

# convert the object into a dict
return_policy_response_dict = return_policy_response_instance.to_dict()
# create an instance of ReturnPolicyResponse from a dict
return_policy_response_from_dict = ReturnPolicyResponse.from_dict(return_policy_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


