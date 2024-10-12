# TagTypeMarshallerWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[TagTypeMarshaller]**](TagTypeMarshaller.md) |  | [optional] 

## Example

```python
from openapi_client.models.tag_type_marshaller_wrapped import TagTypeMarshallerWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of TagTypeMarshallerWrapped from a JSON string
tag_type_marshaller_wrapped_instance = TagTypeMarshallerWrapped.from_json(json)
# print the JSON string representation of the object
print(TagTypeMarshallerWrapped.to_json())

# convert the object into a dict
tag_type_marshaller_wrapped_dict = tag_type_marshaller_wrapped_instance.to_dict()
# create an instance of TagTypeMarshallerWrapped from a dict
tag_type_marshaller_wrapped_from_dict = TagTypeMarshallerWrapped.from_dict(tag_type_marshaller_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


