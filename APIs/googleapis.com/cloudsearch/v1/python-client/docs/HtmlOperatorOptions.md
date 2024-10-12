# HtmlOperatorOptions

Used to provide a search operator for html properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator_name** | **str** | Indicates the operator name required in the query in order to isolate the html property. For example, if operatorName is *subject* and the property&#39;s name is *subjectLine*, then queries like *subject:&lt;value&gt;* show results only where the value of the property named *subjectLine* matches *&lt;value&gt;*. By contrast, a search that uses the same *&lt;value&gt;* without an operator return all items where *&lt;value&gt;* matches the value of any html properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. | [optional] 

## Example

```python
from openapi_client.models.html_operator_options import HtmlOperatorOptions

# TODO update the JSON string below
json = "{}"
# create an instance of HtmlOperatorOptions from a JSON string
html_operator_options_instance = HtmlOperatorOptions.from_json(json)
# print the JSON string representation of the object
print(HtmlOperatorOptions.to_json())

# convert the object into a dict
html_operator_options_dict = html_operator_options_instance.to_dict()
# create an instance of HtmlOperatorOptions from a dict
html_operator_options_from_dict = HtmlOperatorOptions.from_dict(html_operator_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


