# StreamTargetCreateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_target** | [**StreamTarget5**](StreamTarget5.md) |  | 

## Example

```python
from openapi_client.models.stream_target_create_input import StreamTargetCreateInput

# TODO update the JSON string below
json = "{}"
# create an instance of StreamTargetCreateInput from a JSON string
stream_target_create_input_instance = StreamTargetCreateInput.from_json(json)
# print the JSON string representation of the object
print(StreamTargetCreateInput.to_json())

# convert the object into a dict
stream_target_create_input_dict = stream_target_create_input_instance.to_dict()
# create an instance of StreamTargetCreateInput from a dict
stream_target_create_input_from_dict = StreamTargetCreateInput.from_dict(stream_target_create_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


