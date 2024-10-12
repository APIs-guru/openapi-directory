# CustomPolicyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_policies** | [**List[CompactCustomPolicyResponse]**](CompactCustomPolicyResponse.md) | This array contains the custom policies that match the input criteria. | [optional] 
**href** | **str** | &lt;i&gt;This field is for future use.&lt;/i&gt; | [optional] 
**limit** | **int** | &lt;i&gt;This field is for future use.&lt;/i&gt; | [optional] 
**next** | **str** | &lt;i&gt;This field is for future use.&lt;/i&gt; | [optional] 
**offset** | **int** | &lt;i&gt;This field is for future use.&lt;/i&gt; | [optional] 
**prev** | **str** | &lt;i&gt;This field is for future use.&lt;/i&gt; | [optional] 
**total** | **int** | &lt;i&gt;This field is for future use.&lt;/i&gt; | [optional] 

## Example

```python
from openapi_client.models.custom_policy_response import CustomPolicyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomPolicyResponse from a JSON string
custom_policy_response_instance = CustomPolicyResponse.from_json(json)
# print the JSON string representation of the object
print(CustomPolicyResponse.to_json())

# convert the object into a dict
custom_policy_response_dict = custom_policy_response_instance.to_dict()
# create an instance of CustomPolicyResponse from a dict
custom_policy_response_from_dict = CustomPolicyResponse.from_dict(custom_policy_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


