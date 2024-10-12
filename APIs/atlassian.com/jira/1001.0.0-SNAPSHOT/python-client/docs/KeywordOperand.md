# KeywordOperand

An operand that is a JQL keyword. See [Advanced searching - keywords reference](https://confluence.atlassian.com/jiracorecloud/advanced-searching-keywords-reference-765593717.html#Advancedsearching-keywordsreference-EMPTYEMPTY) for more information about operand keywords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyword** | **str** | The keyword that is the operand value. | 

## Example

```python
from openapi_client.models.keyword_operand import KeywordOperand

# TODO update the JSON string below
json = "{}"
# create an instance of KeywordOperand from a JSON string
keyword_operand_instance = KeywordOperand.from_json(json)
# print the JSON string representation of the object
print(KeywordOperand.to_json())

# convert the object into a dict
keyword_operand_dict = keyword_operand_instance.to_dict()
# create an instance of KeywordOperand from a dict
keyword_operand_from_dict = KeywordOperand.from_dict(keyword_operand_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


