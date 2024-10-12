# StreamDescriptor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**namespace** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.stream_descriptor import StreamDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of StreamDescriptor from a JSON string
stream_descriptor_instance = StreamDescriptor.from_json(json)
# print the JSON string representation of the object
print(StreamDescriptor.to_json())

# convert the object into a dict
stream_descriptor_dict = stream_descriptor_instance.to_dict()
# create an instance of StreamDescriptor from a dict
stream_descriptor_from_dict = StreamDescriptor.from_dict(stream_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


