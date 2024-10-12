# ObjectPropertyOptions

The options for object properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subobject_properties** | [**List[PropertyDefinition]**](PropertyDefinition.md) | The properties of the sub-object. These properties represent a nested object. For example, if this property represents a postal address, the subobjectProperties might be named *street*, *city*, and *state*. The maximum number of elements is 1000. | [optional] 

## Example

```python
from openapi_client.models.object_property_options import ObjectPropertyOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectPropertyOptions from a JSON string
object_property_options_instance = ObjectPropertyOptions.from_json(json)
# print the JSON string representation of the object
print(ObjectPropertyOptions.to_json())

# convert the object into a dict
object_property_options_dict = object_property_options_instance.to_dict()
# create an instance of ObjectPropertyOptions from a dict
object_property_options_from_dict = ObjectPropertyOptions.from_dict(object_property_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


