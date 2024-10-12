# RingSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_cancel_timeout_ms** | **int** |  | 
**auto_reject_timeout_ms** | **int** |  | 

## Example

```python
from openapi_client.models.ring_settings import RingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of RingSettings from a JSON string
ring_settings_instance = RingSettings.from_json(json)
# print the JSON string representation of the object
print(RingSettings.to_json())

# convert the object into a dict
ring_settings_dict = ring_settings_instance.to_dict()
# create an instance of RingSettings from a dict
ring_settings_from_dict = RingSettings.from_dict(ring_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


