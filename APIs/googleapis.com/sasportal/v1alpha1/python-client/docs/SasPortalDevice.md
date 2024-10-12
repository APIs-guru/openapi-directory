# SasPortalDevice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_config** | [**SasPortalDeviceConfig**](SasPortalDeviceConfig.md) |  | [optional] 
**current_channels** | [**List[SasPortalChannelWithScore]**](SasPortalChannelWithScore.md) | Output only. Current channels with scores. | [optional] [readonly] 
**device_metadata** | [**SasPortalDeviceMetadata**](SasPortalDeviceMetadata.md) |  | [optional] 
**display_name** | **str** | Device display name. | [optional] 
**fcc_id** | **str** | The FCC identifier of the device. Refer to https://www.fcc.gov/oet/ea/fccid for FccID format. Accept underscores and periods because some test-SAS customers use them. | [optional] 
**grant_range_allowlists** | [**List[SasPortalFrequencyRange]**](SasPortalFrequencyRange.md) | Only ranges that are within the allowlists are available for new grants. | [optional] 
**grants** | [**List[SasPortalDeviceGrant]**](SasPortalDeviceGrant.md) | Output only. Grants held by the device. | [optional] 
**name** | **str** | Output only. The resource path name. | [optional] 
**preloaded_config** | [**SasPortalDeviceConfig**](SasPortalDeviceConfig.md) |  | [optional] 
**serial_number** | **str** | A serial number assigned to the device by the device manufacturer. | [optional] 
**state** | **str** | Output only. Device state. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_device import SasPortalDevice

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalDevice from a JSON string
sas_portal_device_instance = SasPortalDevice.from_json(json)
# print the JSON string representation of the object
print(SasPortalDevice.to_json())

# convert the object into a dict
sas_portal_device_dict = sas_portal_device_instance.to_dict()
# create an instance of SasPortalDevice from a dict
sas_portal_device_from_dict = SasPortalDevice.from_dict(sas_portal_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


