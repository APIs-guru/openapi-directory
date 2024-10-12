# ArrayOfStreamTargets

An array of stream targets and their usage by protocol and zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_billed** | **int** | The amount of usage, in bytes, that was billed for the stream target during the selected time frame. | [optional] 
**bytes_used** | **int** | The amount of content, in bytes, that went through the stream target during the selected time frame. | [optional] 
**deleted** | **bool** | A value of &lt;strong&gt;true&lt;/strong&gt; indicates that the stream target has been removed from Wowza Streaming Cloud. | [optional] 
**id** | **str** | The unique alphanumeric string that identifies the stream target. | [optional] 
**name** | **str** | A descriptive name for the stream target. | [optional] 
**protocols** | [**HashOfProtocols**](HashOfProtocols.md) |  | [optional] 

## Example

```python
from openapi_client.models.array_of_stream_targets import ArrayOfStreamTargets

# TODO update the JSON string below
json = "{}"
# create an instance of ArrayOfStreamTargets from a JSON string
array_of_stream_targets_instance = ArrayOfStreamTargets.from_json(json)
# print the JSON string representation of the object
print(ArrayOfStreamTargets.to_json())

# convert the object into a dict
array_of_stream_targets_dict = array_of_stream_targets_instance.to_dict()
# create an instance of ArrayOfStreamTargets from a dict
array_of_stream_targets_from_dict = ArrayOfStreamTargets.from_dict(array_of_stream_targets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


