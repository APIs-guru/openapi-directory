# EnumOperatorOptions

Used to provide a search operator for enum properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. For example, if you provide no operator for a *priority* enum property with possible values *p0* and *p1*, a query that contains the term *p0* returns items that have *p0* as the value of the *priority* property, as well as any items that contain the string *p0* in other fields. If you provide an operator name for the enum, such as *priority*, then search users can use that operator to refine results to only items that have *p0* as this property's value, with the query *priority:p0*.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator_name** | **str** | Indicates the operator name required in the query in order to isolate the enum property. For example, if operatorName is *priority* and the property&#39;s name is *priorityVal*, then queries like *priority:&lt;value&gt;* show results only where the value of the property named *priorityVal* matches *&lt;value&gt;*. By contrast, a search that uses the same *&lt;value&gt;* without an operator returns all items where *&lt;value&gt;* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. | [optional] 

## Example

```python
from openapi_client.models.enum_operator_options import EnumOperatorOptions

# TODO update the JSON string below
json = "{}"
# create an instance of EnumOperatorOptions from a JSON string
enum_operator_options_instance = EnumOperatorOptions.from_json(json)
# print the JSON string representation of the object
print(EnumOperatorOptions.to_json())

# convert the object into a dict
enum_operator_options_dict = enum_operator_options_instance.to_dict()
# create an instance of EnumOperatorOptions from a dict
enum_operator_options_from_dict = EnumOperatorOptions.from_dict(enum_operator_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


