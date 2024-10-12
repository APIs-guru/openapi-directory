# ExtensionChain

A single extension chain wrapper that contains the match conditions and extensions to execute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extensions** | [**List[ExtensionChainExtension]**](ExtensionChainExtension.md) | Required. A set of extensions to execute for the matching request. At least one extension is required. Up to 3 extensions can be defined for each extension chain for &#x60;LbTrafficExtension&#x60; resource. &#x60;LbRouteExtension&#x60; chains are limited to 1 extension per extension chain. | [optional] 
**match_condition** | [**ExtensionChainMatchCondition**](ExtensionChainMatchCondition.md) |  | [optional] 
**name** | **str** | Required. The name for this extension chain. The name is logged as part of the HTTP request logs. The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens, and can have a maximum length of 63 characters. Additionally, the first character must be a letter and the last a letter or a number. | [optional] 

## Example

```python
from openapi_client.models.extension_chain import ExtensionChain

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionChain from a JSON string
extension_chain_instance = ExtensionChain.from_json(json)
# print the JSON string representation of the object
print(ExtensionChain.to_json())

# convert the object into a dict
extension_chain_dict = extension_chain_instance.to_dict()
# create an instance of ExtensionChain from a dict
extension_chain_from_dict = ExtensionChain.from_dict(extension_chain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


