# StreamSourceUpdateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_source** | [**StreamSource2**](StreamSource2.md) |  | 

## Example

```python
from openapi_client.models.stream_source_update_input import StreamSourceUpdateInput

# TODO update the JSON string below
json = "{}"
# create an instance of StreamSourceUpdateInput from a JSON string
stream_source_update_input_instance = StreamSourceUpdateInput.from_json(json)
# print the JSON string representation of the object
print(StreamSourceUpdateInput.to_json())

# convert the object into a dict
stream_source_update_input_dict = stream_source_update_input_instance.to_dict()
# create an instance of StreamSourceUpdateInput from a dict
stream_source_update_input_from_dict = StreamSourceUpdateInput.from_dict(stream_source_update_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


