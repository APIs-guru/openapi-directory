# SasPortalDeviceAirInterface

Information about the device's air interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**radio_technology** | **str** | Conditional. This field specifies the radio access technology that is used for the CBSD. | [optional] 
**supported_spec** | **str** | Optional. This field is related to the &#x60;radioTechnology&#x60; and provides the air interface specification that the CBSD is compliant with at the time of registration. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_device_air_interface import SasPortalDeviceAirInterface

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalDeviceAirInterface from a JSON string
sas_portal_device_air_interface_instance = SasPortalDeviceAirInterface.from_json(json)
# print the JSON string representation of the object
print(SasPortalDeviceAirInterface.to_json())

# convert the object into a dict
sas_portal_device_air_interface_dict = sas_portal_device_air_interface_instance.to_dict()
# create an instance of SasPortalDeviceAirInterface from a dict
sas_portal_device_air_interface_from_dict = SasPortalDeviceAirInterface.from_dict(sas_portal_device_air_interface_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


