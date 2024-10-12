# DirectorySiteSettings

Directory Site Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_view_opt_out** | **bool** | Whether this directory site has disabled active view creatives. | [optional] 
**dfp_settings** | [**DfpSettings**](DfpSettings.md) |  | [optional] 
**instream_video_placement_accepted** | **bool** | Whether this site accepts in-stream video ads. | [optional] 
**interstitial_placement_accepted** | **bool** | Whether this site accepts interstitial ads. | [optional] 

## Example

```python
from openapi_client.models.directory_site_settings import DirectorySiteSettings

# TODO update the JSON string below
json = "{}"
# create an instance of DirectorySiteSettings from a JSON string
directory_site_settings_instance = DirectorySiteSettings.from_json(json)
# print the JSON string representation of the object
print(DirectorySiteSettings.to_json())

# convert the object into a dict
directory_site_settings_dict = directory_site_settings_instance.to_dict()
# create an instance of DirectorySiteSettings from a dict
directory_site_settings_from_dict = DirectorySiteSettings.from_dict(directory_site_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


