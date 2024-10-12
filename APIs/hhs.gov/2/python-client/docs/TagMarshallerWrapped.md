# TagMarshallerWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[TagMarshaller]**](TagMarshaller.md) |  | [optional] 

## Example

```python
from openapi_client.models.tag_marshaller_wrapped import TagMarshallerWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of TagMarshallerWrapped from a JSON string
tag_marshaller_wrapped_instance = TagMarshallerWrapped.from_json(json)
# print the JSON string representation of the object
print(TagMarshallerWrapped.to_json())

# convert the object into a dict
tag_marshaller_wrapped_dict = tag_marshaller_wrapped_instance.to_dict()
# create an instance of TagMarshallerWrapped from a dict
tag_marshaller_wrapped_from_dict = TagMarshallerWrapped.from_dict(tag_marshaller_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


