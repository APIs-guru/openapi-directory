# LiveOutput

The Live Output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LiveOutputProperties**](LiveOutputProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource ID for the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.live_output import LiveOutput

# TODO update the JSON string below
json = "{}"
# create an instance of LiveOutput from a JSON string
live_output_instance = LiveOutput.from_json(json)
# print the JSON string representation of the object
print(LiveOutput.to_json())

# convert the object into a dict
live_output_dict = live_output_instance.to_dict()
# create an instance of LiveOutput from a dict
live_output_from_dict = LiveOutput.from_dict(live_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


