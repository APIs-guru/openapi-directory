# ExtendedAttributeWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[ExtendedAttribute]**](ExtendedAttribute.md) |  | [optional] 

## Example

```python
from openapi_client.models.extended_attribute_wrapped import ExtendedAttributeWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedAttributeWrapped from a JSON string
extended_attribute_wrapped_instance = ExtendedAttributeWrapped.from_json(json)
# print the JSON string representation of the object
print(ExtendedAttributeWrapped.to_json())

# convert the object into a dict
extended_attribute_wrapped_dict = extended_attribute_wrapped_instance.to_dict()
# create an instance of ExtendedAttributeWrapped from a dict
extended_attribute_wrapped_from_dict = ExtendedAttributeWrapped.from_dict(extended_attribute_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


