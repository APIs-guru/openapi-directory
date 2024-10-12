# DeviceFrameDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frame_url** | **str** |  | [optional] 
**height** | **float** |  | [optional] 
**screen** | **List[float]** |  | [optional] 
**width** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.device_frame_definition import DeviceFrameDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceFrameDefinition from a JSON string
device_frame_definition_instance = DeviceFrameDefinition.from_json(json)
# print the JSON string representation of the object
print(DeviceFrameDefinition.to_json())

# convert the object into a dict
device_frame_definition_dict = device_frame_definition_instance.to_dict()
# create an instance of DeviceFrameDefinition from a dict
device_frame_definition_from_dict = DeviceFrameDefinition.from_dict(device_frame_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


