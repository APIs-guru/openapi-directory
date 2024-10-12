# OutputStreamTargetCreateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_stream_target** | [**OutputStreamTarget3**](OutputStreamTarget3.md) |  | 

## Example

```python
from openapi_client.models.output_stream_target_create_input import OutputStreamTargetCreateInput

# TODO update the JSON string below
json = "{}"
# create an instance of OutputStreamTargetCreateInput from a JSON string
output_stream_target_create_input_instance = OutputStreamTargetCreateInput.from_json(json)
# print the JSON string representation of the object
print(OutputStreamTargetCreateInput.to_json())

# convert the object into a dict
output_stream_target_create_input_dict = output_stream_target_create_input_instance.to_dict()
# create an instance of OutputStreamTargetCreateInput from a dict
output_stream_target_create_input_from_dict = OutputStreamTargetCreateInput.from_dict(output_stream_target_create_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


