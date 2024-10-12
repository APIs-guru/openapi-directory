# TextOperatorOptions

Used to provide a search operator for text properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exact_match_with_operator** | **bool** | If true, the text value is tokenized as one atomic value in operator searches and facet matches. For example, if the operator name is \&quot;genre\&quot; and the value is \&quot;science-fiction\&quot; the query restrictions \&quot;genre:science\&quot; and \&quot;genre:fiction\&quot; doesn&#39;t match the item; \&quot;genre:science-fiction\&quot; does. Text value matching is case-sensitive and does not remove special characters. If false, the text is tokenized. For example, if the value is \&quot;science-fiction\&quot; the queries \&quot;genre:science\&quot; and \&quot;genre:fiction\&quot; matches the item. | [optional] 
**operator_name** | **str** | Indicates the operator name required in the query in order to isolate the text property. For example, if operatorName is *subject* and the property&#39;s name is *subjectLine*, then queries like *subject:&lt;value&gt;* show results only where the value of the property named *subjectLine* matches *&lt;value&gt;*. By contrast, a search that uses the same *&lt;value&gt;* without an operator returns all items where *&lt;value&gt;* matches the value of any text properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. | [optional] 

## Example

```python
from openapi_client.models.text_operator_options import TextOperatorOptions

# TODO update the JSON string below
json = "{}"
# create an instance of TextOperatorOptions from a JSON string
text_operator_options_instance = TextOperatorOptions.from_json(json)
# print the JSON string representation of the object
print(TextOperatorOptions.to_json())

# convert the object into a dict
text_operator_options_dict = text_operator_options_instance.to_dict()
# create an instance of TextOperatorOptions from a dict
text_operator_options_from_dict = TextOperatorOptions.from_dict(text_operator_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


