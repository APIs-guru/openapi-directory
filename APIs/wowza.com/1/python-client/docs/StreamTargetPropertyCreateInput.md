# StreamTargetPropertyCreateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_property** | [**ModelProperty**](ModelProperty.md) |  | 

## Example

```python
from openapi_client.models.stream_target_property_create_input import StreamTargetPropertyCreateInput

# TODO update the JSON string below
json = "{}"
# create an instance of StreamTargetPropertyCreateInput from a JSON string
stream_target_property_create_input_instance = StreamTargetPropertyCreateInput.from_json(json)
# print the JSON string representation of the object
print(StreamTargetPropertyCreateInput.to_json())

# convert the object into a dict
stream_target_property_create_input_dict = stream_target_property_create_input_instance.to_dict()
# create an instance of StreamTargetPropertyCreateInput from a dict
stream_target_property_create_input_from_dict = StreamTargetPropertyCreateInput.from_dict(stream_target_property_create_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


