# SasPortalDeviceGrant

Device grant. It is an authorization provided by the Spectrum Access System to a device to transmit using specified operating parameters after a successful heartbeat by the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_type** | **str** | Type of channel used. | [optional] 
**expire_time** | **str** | The expiration time of the grant. | [optional] 
**frequency_range** | [**SasPortalFrequencyRange**](SasPortalFrequencyRange.md) |  | [optional] 
**grant_id** | **str** | Grant Id. | [optional] 
**last_heartbeat_transmit_expire_time** | **str** | The transmit expiration time of the last heartbeat. | [optional] 
**max_eirp** | **float** | Maximum Equivalent Isotropically Radiated Power (EIRP) permitted by the grant. The maximum EIRP is in units of dBm/MHz. The value of &#x60;maxEirp&#x60; represents the average (RMS) EIRP that would be measured by the procedure defined in FCC part 96.41(e)(3). | [optional] 
**move_list** | [**List[SasPortalDpaMoveList]**](SasPortalDpaMoveList.md) | The DPA move lists on which this grant appears. | [optional] 
**state** | **str** | State of the grant. | [optional] 
**suspension_reason** | **List[str]** | If the grant is suspended, the reason(s) for suspension. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_device_grant import SasPortalDeviceGrant

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalDeviceGrant from a JSON string
sas_portal_device_grant_instance = SasPortalDeviceGrant.from_json(json)
# print the JSON string representation of the object
print(SasPortalDeviceGrant.to_json())

# convert the object into a dict
sas_portal_device_grant_dict = sas_portal_device_grant_instance.to_dict()
# create an instance of SasPortalDeviceGrant from a dict
sas_portal_device_grant_from_dict = SasPortalDeviceGrant.from_dict(sas_portal_device_grant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


