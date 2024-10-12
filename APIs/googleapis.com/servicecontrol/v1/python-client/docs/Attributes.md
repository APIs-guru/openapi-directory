# Attributes

A set of attributes, each in the format `[KEY]:[VALUE]`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_map** | [**Dict[str, AttributeValue]**](AttributeValue.md) | The set of attributes. Each attribute&#39;s key can be up to 128 bytes long. The value can be a string up to 256 bytes, a signed 64-bit integer, or the Boolean values &#x60;true&#x60; and &#x60;false&#x60;. For example: \&quot;/instance_id\&quot;: \&quot;my-instance\&quot; \&quot;/http/user_agent\&quot;: \&quot;\&quot; \&quot;/http/request_bytes\&quot;: 300 \&quot;abc.com/myattribute\&quot;: true | [optional] 
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


