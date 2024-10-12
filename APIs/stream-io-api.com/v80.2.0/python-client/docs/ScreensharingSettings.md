# ScreensharingSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_enabled** | **bool** |  | 
**enabled** | **bool** |  | 

## Example

```python
from openapi_client.models.screensharing_settings import ScreensharingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ScreensharingSettings from a JSON string
screensharing_settings_instance = ScreensharingSettings.from_json(json)
# print the JSON string representation of the object
print(ScreensharingSettings.to_json())

# convert the object into a dict
screensharing_settings_dict = screensharing_settings_instance.to_dict()
# create an instance of ScreensharingSettings from a dict
screensharing_settings_from_dict = ScreensharingSettings.from_dict(screensharing_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


