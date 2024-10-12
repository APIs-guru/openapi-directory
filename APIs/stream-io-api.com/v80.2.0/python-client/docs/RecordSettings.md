# RecordSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_only** | **bool** |  | 
**mode** | **str** |  | 
**quality** | **str** |  | 

## Example

```python
from openapi_client.models.record_settings import RecordSettings

# TODO update the JSON string below
json = "{}"
# create an instance of RecordSettings from a JSON string
record_settings_instance = RecordSettings.from_json(json)
# print the JSON string representation of the object
print(RecordSettings.to_json())

# convert the object into a dict
record_settings_dict = record_settings_instance.to_dict()
# create an instance of RecordSettings from a dict
record_settings_from_dict = RecordSettings.from_dict(record_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


