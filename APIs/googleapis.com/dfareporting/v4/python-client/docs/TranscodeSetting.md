# TranscodeSetting

Transcode Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled_video_formats** | **List[int]** | Allowlist of video formats to be served to this placement. Set this list to null or empty to serve all video formats. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#transcodeSetting\&quot;. | [optional] 

## Example

```python
from openapi_client.models.transcode_setting import TranscodeSetting

# TODO update the JSON string below
json = "{}"
# create an instance of TranscodeSetting from a JSON string
transcode_setting_instance = TranscodeSetting.from_json(json)
# print the JSON string representation of the object
print(TranscodeSetting.to_json())

# convert the object into a dict
transcode_setting_dict = transcode_setting_instance.to_dict()
# create an instance of TranscodeSetting from a dict
transcode_setting_from_dict = TranscodeSetting.from_dict(transcode_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


