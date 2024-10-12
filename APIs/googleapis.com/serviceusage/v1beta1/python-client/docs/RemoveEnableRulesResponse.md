# RemoveEnableRulesResponse

The response message of `RemoveEnableRules` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | **str** | The parent consumer policy. It can be &#x60;projects/12345/consumerPolicies/default&#x60;, or &#x60;folders/12345/consumerPolicies/default&#x60;, or &#x60;organizations/12345/consumerPolicies/default&#x60;. | [optional] 
**removed_values** | **List[str]** | The values removed from the parent consumer policy. | [optional] 

## Example

```python
from openapi_client.models.remove_enable_rules_response import RemoveEnableRulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveEnableRulesResponse from a JSON string
remove_enable_rules_response_instance = RemoveEnableRulesResponse.from_json(json)
# print the JSON string representation of the object
print(RemoveEnableRulesResponse.to_json())

# convert the object into a dict
remove_enable_rules_response_dict = remove_enable_rules_response_instance.to_dict()
# create an instance of RemoveEnableRulesResponse from a dict
remove_enable_rules_response_from_dict = RemoveEnableRulesResponse.from_dict(remove_enable_rules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


