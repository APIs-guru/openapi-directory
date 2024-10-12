# HLSSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_on** | **bool** |  | 
**enabled** | **bool** |  | 
**quality_tracks** | **List[str]** |  | 

## Example

```python
from openapi_client.models.hls_settings import HLSSettings

# TODO update the JSON string below
json = "{}"
# create an instance of HLSSettings from a JSON string
hls_settings_instance = HLSSettings.from_json(json)
# print the JSON string representation of the object
print(HLSSettings.to_json())

# convert the object into a dict
hls_settings_dict = hls_settings_instance.to_dict()
# create an instance of HLSSettings from a dict
hls_settings_from_dict = HLSSettings.from_dict(hls_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


