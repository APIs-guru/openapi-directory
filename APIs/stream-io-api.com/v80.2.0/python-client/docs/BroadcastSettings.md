# BroadcastSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** |  | 
**hls** | [**HLSSettings**](HLSSettings.md) |  | 

## Example

```python
from openapi_client.models.broadcast_settings import BroadcastSettings

# TODO update the JSON string below
json = "{}"
# create an instance of BroadcastSettings from a JSON string
broadcast_settings_instance = BroadcastSettings.from_json(json)
# print the JSON string representation of the object
print(BroadcastSettings.to_json())

# convert the object into a dict
broadcast_settings_dict = broadcast_settings_instance.to_dict()
# create an instance of BroadcastSettings from a dict
broadcast_settings_from_dict = BroadcastSettings.from_dict(broadcast_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


