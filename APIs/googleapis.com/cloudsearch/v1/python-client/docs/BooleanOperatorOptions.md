# BooleanOperatorOptions

Used to provide a search operator for boolean properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator_name** | **str** | Indicates the operator name required in the query in order to isolate the boolean property. For example, if operatorName is *closed* and the property&#39;s name is *isClosed*, then queries like *closed:&lt;value&gt;* show results only where the value of the property named *isClosed* matches *&lt;value&gt;*. By contrast, a search that uses the same *&lt;value&gt;* without an operator returns all items where *&lt;value&gt;* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. | [optional] 

## Example

```python
from openapi_client.models.boolean_operator_options import BooleanOperatorOptions

# TODO update the JSON string below
json = "{}"
# create an instance of BooleanOperatorOptions from a JSON string
boolean_operator_options_instance = BooleanOperatorOptions.from_json(json)
# print the JSON string representation of the object
print(BooleanOperatorOptions.to_json())

# convert the object into a dict
boolean_operator_options_dict = boolean_operator_options_instance.to_dict()
# create an instance of BooleanOperatorOptions from a dict
boolean_operator_options_from_dict = BooleanOperatorOptions.from_dict(boolean_operator_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


