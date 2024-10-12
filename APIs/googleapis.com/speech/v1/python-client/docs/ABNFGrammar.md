# ABNFGrammar


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abnf_strings** | **List[str]** | All declarations and rules of an ABNF grammar broken up into multiple strings that will end up concatenated. | [optional] 

## Example

```python
from openapi_client.models.abnf_grammar import ABNFGrammar

# TODO update the JSON string below
json = "{}"
# create an instance of ABNFGrammar from a JSON string
abnf_grammar_instance = ABNFGrammar.from_json(json)
# print the JSON string representation of the object
print(ABNFGrammar.to_json())

# convert the object into a dict
abnf_grammar_dict = abnf_grammar_instance.to_dict()
# create an instance of ABNFGrammar from a dict
abnf_grammar_from_dict = ABNFGrammar.from_dict(abnf_grammar_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


