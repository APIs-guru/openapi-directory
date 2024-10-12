# AddEnableRulesResponse

The response message of `AddEnableRules` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_values** | **List[str]** | The values added to the parent consumer policy. | [optional] 
**parent** | **str** | The parent consumer policy. It can be &#x60;projects/12345/consumerPolicies/default&#x60;, or &#x60;folders/12345/consumerPolicies/default&#x60;, or &#x60;organizations/12345/consumerPolicies/default&#x60;. | [optional] 

## Example

```python
from openapi_client.models.add_enable_rules_response import AddEnableRulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddEnableRulesResponse from a JSON string
add_enable_rules_response_instance = AddEnableRulesResponse.from_json(json)
# print the JSON string representation of the object
print(AddEnableRulesResponse.to_json())

# convert the object into a dict
add_enable_rules_response_dict = add_enable_rules_response_instance.to_dict()
# create an instance of AddEnableRulesResponse from a dict
add_enable_rules_response_from_dict = AddEnableRulesResponse.from_dict(add_enable_rules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


