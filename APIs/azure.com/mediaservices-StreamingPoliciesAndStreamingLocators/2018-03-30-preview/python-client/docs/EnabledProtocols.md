# EnabledProtocols

Class to specify which protocols are enabled

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dash** | **bool** | Enable Dash protocol or not | 
**download** | **bool** | Enable Download protocol or not | 
**hls** | **bool** | Enable Hls protocol or not | 
**smooth_streaming** | **bool** | Enable SmoothStreaming protocol or not | 

## Example

```python
from openapi_client.models.enabled_protocols import EnabledProtocols

# TODO update the JSON string below
json = "{}"
# create an instance of EnabledProtocols from a JSON string
enabled_protocols_instance = EnabledProtocols.from_json(json)
# print the JSON string representation of the object
print(EnabledProtocols.to_json())

# convert the object into a dict
enabled_protocols_dict = enabled_protocols_instance.to_dict()
# create an instance of EnabledProtocols from a dict
enabled_protocols_from_dict = EnabledProtocols.from_dict(enabled_protocols_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


