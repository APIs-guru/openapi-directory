# StreamTransform


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_descriptor** | [**StreamDescriptor**](StreamDescriptor.md) |  | 
**transform_type** | **str** |  | 
**update_stream** | [**List[FieldTransform]**](FieldTransform.md) | list of field transformations. order does not matter. | [optional] 

## Example

```python
from openapi_client.models.stream_transform import StreamTransform

# TODO update the JSON string below
json = "{}"
# create an instance of StreamTransform from a JSON string
stream_transform_instance = StreamTransform.from_json(json)
# print the JSON string representation of the object
print(StreamTransform.to_json())

# convert the object into a dict
stream_transform_dict = stream_transform_instance.to_dict()
# create an instance of StreamTransform from a dict
stream_transform_from_dict = StreamTransform.from_dict(stream_transform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


