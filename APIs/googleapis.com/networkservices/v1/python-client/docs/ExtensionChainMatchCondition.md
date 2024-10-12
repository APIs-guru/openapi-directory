# ExtensionChainMatchCondition

Conditions under which this chain is invoked for a request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cel_expression** | **str** | Required. A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. For more information, see [CEL matcher language reference](/service-extensions/docs/cel-matcher-language-reference). | [optional] 

## Example

```python
from openapi_client.models.extension_chain_match_condition import ExtensionChainMatchCondition

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionChainMatchCondition from a JSON string
extension_chain_match_condition_instance = ExtensionChainMatchCondition.from_json(json)
# print the JSON string representation of the object
print(ExtensionChainMatchCondition.to_json())

# convert the object into a dict
extension_chain_match_condition_dict = extension_chain_match_condition_instance.to_dict()
# create an instance of ExtensionChainMatchCondition from a dict
extension_chain_match_condition_from_dict = ExtensionChainMatchCondition.from_dict(extension_chain_match_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


