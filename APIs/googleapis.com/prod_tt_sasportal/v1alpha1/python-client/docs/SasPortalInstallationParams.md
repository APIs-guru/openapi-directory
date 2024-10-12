# SasPortalInstallationParams

Information about the device installation parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**antenna_azimuth** | **int** | Boresight direction of the horizontal plane of the antenna in degrees with respect to true north. The value of this parameter is an integer with a value between 0 and 359 inclusive. A value of 0 degrees means true north; a value of 90 degrees means east. This parameter is optional for Category A devices and conditional for Category B devices. | [optional] 
**antenna_beamwidth** | **int** | 3-dB antenna beamwidth of the antenna in the horizontal-plane in degrees. This parameter is an unsigned integer having a value between 0 and 360 (degrees) inclusive; it is optional for Category A devices and conditional for Category B devices. | [optional] 
**antenna_downtilt** | **int** | Antenna downtilt in degrees and is an integer with a value between -90 and +90 inclusive; a negative value means the antenna is tilted up (above horizontal). This parameter is optional for Category A devices and conditional for Category B devices. | [optional] 
**antenna_gain** | **int** | Peak antenna gain in dBi. This parameter is an integer with a value between -127 and +128 (dBi) inclusive. | [optional] 
**antenna_model** | **str** | If an external antenna is used, the antenna model is optionally provided in this field. The string has a maximum length of 128 octets. | [optional] 
**cpe_cbsd_indication** | **bool** | If present, this parameter specifies whether the CBSD is a CPE-CBSD or not. | [optional] 
**eirp_capability** | **int** | This parameter is the maximum device EIRP in units of dBm/10MHz and is an integer with a value between -127 and +47 (dBm/10 MHz) inclusive. If not included, SAS interprets it as maximum allowable EIRP in units of dBm/10MHz for device category. | [optional] 
**height** | **float** | Device antenna height in meters. When the &#x60;heightType&#x60; parameter value is \&quot;AGL\&quot;, the antenna height should be given relative to ground level. When the &#x60;heightType&#x60; parameter value is \&quot;AMSL\&quot;, it is given with respect to WGS84 datum. | [optional] 
**height_type** | **str** | Specifies how the height is measured. | [optional] 
**horizontal_accuracy** | **float** | A positive number in meters to indicate accuracy of the device antenna horizontal location. This optional parameter should only be present if its value is less than the FCC requirement of 50 meters. | [optional] 
**indoor_deployment** | **bool** | Whether the device antenna is indoor or not. &#x60;true&#x60;: indoor. &#x60;false&#x60;: outdoor. | [optional] 
**latitude** | **float** | Latitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -90.000000 to +90.000000. Positive values represent latitudes north of the equator; negative values south of the equator. | [optional] 
**longitude** | **float** | Longitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -180.000000 to +180.000000. Positive values represent longitudes east of the prime meridian; negative values west of the prime meridian. | [optional] 
**vertical_accuracy** | **float** | A positive number in meters to indicate accuracy of the device antenna vertical location. This optional parameter should only be present if its value is less than the FCC requirement of 3 meters. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_installation_params import SasPortalInstallationParams

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalInstallationParams from a JSON string
sas_portal_installation_params_instance = SasPortalInstallationParams.from_json(json)
# print the JSON string representation of the object
print(SasPortalInstallationParams.to_json())

# convert the object into a dict
sas_portal_installation_params_dict = sas_portal_installation_params_instance.to_dict()
# create an instance of SasPortalInstallationParams from a dict
sas_portal_installation_params_from_dict = SasPortalInstallationParams.from_dict(sas_portal_installation_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


