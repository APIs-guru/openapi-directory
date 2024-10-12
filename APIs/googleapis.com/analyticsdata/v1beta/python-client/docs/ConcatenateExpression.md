# ConcatenateExpression

Used to combine dimension values to a single dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delimiter** | **str** | The delimiter placed between dimension names. Delimiters are often single characters such as \&quot;|\&quot; or \&quot;,\&quot; but can be longer strings. If a dimension value contains the delimiter, both will be present in response with no distinction. For example if dimension 1 value &#x3D; \&quot;US,FR\&quot;, dimension 2 value &#x3D; \&quot;JP\&quot;, and delimiter &#x3D; \&quot;,\&quot;, then the response will contain \&quot;US,FR,JP\&quot;. | [optional] 
**dimension_names** | **List[str]** | Names of dimensions. The names must refer back to names in the dimensions field of the request. | [optional] 

## Example

```python
from openapi_client.models.concatenate_expression import ConcatenateExpression

# TODO update the JSON string below
json = "{}"
# create an instance of ConcatenateExpression from a JSON string
concatenate_expression_instance = ConcatenateExpression.from_json(json)
# print the JSON string representation of the object
print(ConcatenateExpression.to_json())

# convert the object into a dict
concatenate_expression_dict = concatenate_expression_instance.to_dict()
# create an instance of ConcatenateExpression from a dict
concatenate_expression_from_dict = ConcatenateExpression.from_dict(concatenate_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


