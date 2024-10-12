# CustomStreamTargetInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_target** | [**CustomStreamTarget**](CustomStreamTarget.md) |  | 

## Example

```python
from openapi_client.models.custom_stream_target_input import CustomStreamTargetInput

# TODO update the JSON string below
json = "{}"
# create an instance of CustomStreamTargetInput from a JSON string
custom_stream_target_input_instance = CustomStreamTargetInput.from_json(json)
# print the JSON string representation of the object
print(CustomStreamTargetInput.to_json())

# convert the object into a dict
custom_stream_target_input_dict = custom_stream_target_input_instance.to_dict()
# create an instance of CustomStreamTargetInput from a dict
custom_stream_target_input_from_dict = CustomStreamTargetInput.from_dict(custom_stream_target_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


