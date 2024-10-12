# CreateNetworkCameraQualityRetentionProfileRequestVideoSettings

Video quality and resolution settings for all the camera models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mv12_mv22_mv72** | [**CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV12MV22MV72**](CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV12MV22MV72.md) |  | [optional] 
**mv12_we** | [**CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV12WE**](CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV12WE.md) |  | [optional] 
**mv13** | [**CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV13**](CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV13.md) |  | [optional] 
**mv21_mv71** | [**CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV21MV71**](CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV21MV71.md) |  | [optional] 
**mv22_x_mv72_x** | [**CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV22XMV72X**](CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV22XMV72X.md) |  | [optional] 
**mv32** | [**CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV32**](CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV32.md) |  | [optional] 
**mv33** | [**CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV33**](CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV33.md) |  | [optional] 
**mv52** | [**CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV52**](CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV52.md) |  | [optional] 
**mv63** | [**CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63**](CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63.md) |  | [optional] 
**mv63_x** | [**CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63X**](CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63X.md) |  | [optional] 
**mv93** | [**CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV93**](CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV93.md) |  | [optional] 
**mv93_x** | [**CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV93X**](CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV93X.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_network_camera_quality_retention_profile_request_video_settings import CreateNetworkCameraQualityRetentionProfileRequestVideoSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkCameraQualityRetentionProfileRequestVideoSettings from a JSON string
create_network_camera_quality_retention_profile_request_video_settings_instance = CreateNetworkCameraQualityRetentionProfileRequestVideoSettings.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkCameraQualityRetentionProfileRequestVideoSettings.to_json())

# convert the object into a dict
create_network_camera_quality_retention_profile_request_video_settings_dict = create_network_camera_quality_retention_profile_request_video_settings_instance.to_dict()
# create an instance of CreateNetworkCameraQualityRetentionProfileRequestVideoSettings from a dict
create_network_camera_quality_retention_profile_request_video_settings_from_dict = CreateNetworkCameraQualityRetentionProfileRequestVideoSettings.from_dict(create_network_camera_quality_retention_profile_request_video_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


