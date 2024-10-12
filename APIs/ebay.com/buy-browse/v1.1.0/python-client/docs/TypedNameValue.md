# TypedNameValue

The type that defines the fields for the name/value pairs for item aspects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The text representing the name of the aspect for the name/value pair, such as Color. | [optional] 
**type** | **str** | This indicates if the value being returned is a string or an array of values. Valid Values: STRING - Indicates the value returned is a string. STRING_ARRAY - Indicates the value returned is an array of strings. Code so that your app gracefully handles any future changes to this list. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/gct:ValueTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**value** | **str** | The value of the aspect for the name/value pair, such as Red. | [optional] 

## Example

```python
from openapi_client.models.typed_name_value import TypedNameValue

# TODO update the JSON string below
json = "{}"
# create an instance of TypedNameValue from a JSON string
typed_name_value_instance = TypedNameValue.from_json(json)
# print the JSON string representation of the object
print(TypedNameValue.to_json())

# convert the object into a dict
typed_name_value_dict = typed_name_value_instance.to_dict()
# create an instance of TypedNameValue from a dict
typed_name_value_from_dict = TypedNameValue.from_dict(typed_name_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


