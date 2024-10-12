# StreamTargetUpdateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_target** | [**StreamTarget6**](StreamTarget6.md) |  | 

## Example

```python
from openapi_client.models.stream_target_update_input import StreamTargetUpdateInput

# TODO update the JSON string below
json = "{}"
# create an instance of StreamTargetUpdateInput from a JSON string
stream_target_update_input_instance = StreamTargetUpdateInput.from_json(json)
# print the JSON string representation of the object
print(StreamTargetUpdateInput.to_json())

# convert the object into a dict
stream_target_update_input_dict = stream_target_update_input_instance.to_dict()
# create an instance of StreamTargetUpdateInput from a dict
stream_target_update_input_from_dict = StreamTargetUpdateInput.from_dict(stream_target_update_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


