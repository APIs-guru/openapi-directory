# StreamSourceCreateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_source** | [**StreamSource1**](StreamSource1.md) |  | 

## Example

```python
from openapi_client.models.stream_source_create_input import StreamSourceCreateInput

# TODO update the JSON string below
json = "{}"
# create an instance of StreamSourceCreateInput from a JSON string
stream_source_create_input_instance = StreamSourceCreateInput.from_json(json)
# print the JSON string representation of the object
print(StreamSourceCreateInput.to_json())

# convert the object into a dict
stream_source_create_input_dict = stream_source_create_input_instance.to_dict()
# create an instance of StreamSourceCreateInput from a dict
stream_source_create_input_from_dict = StreamSourceCreateInput.from_dict(stream_source_create_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


