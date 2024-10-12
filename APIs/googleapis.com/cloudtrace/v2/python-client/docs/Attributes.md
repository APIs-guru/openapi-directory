# Attributes

A set of attributes as key-value pairs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_map** | [**Dict[str, AttributeValue]**](AttributeValue.md) | A set of attributes. Each attribute&#39;s key can be up to 128 bytes long. The value can be a string up to 256 bytes, a signed 64-bit integer, or the boolean values &#x60;true&#x60; or &#x60;false&#x60;. For example: \&quot;/instance_id\&quot;: { \&quot;string_value\&quot;: { \&quot;value\&quot;: \&quot;my-instance\&quot; } } \&quot;/http/request_bytes\&quot;: { \&quot;int_value\&quot;: 300 } \&quot;example.com/myattribute\&quot;: { \&quot;bool_value\&quot;: false } | [optional] 
**dropped_attributes_count** | **int** | The number of attributes that were discarded. Attributes can be discarded because their keys are too long or because there are too many attributes. If this value is 0 then all attributes are valid. | [optional] 

## Example

```python
from openapi_client.models.attributes import Attributes

# TODO update the JSON string below
json = "{}"
# create an instance of Attributes from a JSON string
attributes_instance = Attributes.from_json(json)
# print the JSON string representation of the object
print(Attributes.to_json())

# convert the object into a dict
attributes_dict = attributes_instance.to_dict()
# create an instance of Attributes from a dict
attributes_from_dict = Attributes.from_dict(attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


