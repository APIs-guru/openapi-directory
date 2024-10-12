# CdnSettings

Brief description of the live stream cdn settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | The format of the video stream that you are sending to Youtube.  | [optional] 
**frame_rate** | **str** | The frame rate of the inbound video data. | [optional] 
**ingestion_info** | [**IngestionInfo**](IngestionInfo.md) |  | [optional] 
**ingestion_type** | **str** |  The method or protocol used to transmit the video stream. | [optional] 
**resolution** | **str** | The resolution of the inbound video data. | [optional] 

## Example

```python
from openapi_client.models.cdn_settings import CdnSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CdnSettings from a JSON string
cdn_settings_instance = CdnSettings.from_json(json)
# print the JSON string representation of the object
print(CdnSettings.to_json())

# convert the object into a dict
cdn_settings_dict = cdn_settings_instance.to_dict()
# create an instance of CdnSettings from a dict
cdn_settings_from_dict = CdnSettings.from_dict(cdn_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


