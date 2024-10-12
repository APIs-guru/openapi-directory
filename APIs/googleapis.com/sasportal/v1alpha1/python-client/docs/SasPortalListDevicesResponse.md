# SasPortalListDevicesResponse

Response for ListDevices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[SasPortalDevice]**](SasPortalDevice.md) | The devices that match the request. | [optional] 
**next_page_token** | **str** | A pagination token returned from a previous call to ListDevices that indicates from where listing should continue. If the field is missing or empty, it means there is no more devices. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_list_devices_response import SasPortalListDevicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalListDevicesResponse from a JSON string
sas_portal_list_devices_response_instance = SasPortalListDevicesResponse.from_json(json)
# print the JSON string representation of the object
print(SasPortalListDevicesResponse.to_json())

# convert the object into a dict
sas_portal_list_devices_response_dict = sas_portal_list_devices_response_instance.to_dict()
# create an instance of SasPortalListDevicesResponse from a dict
sas_portal_list_devices_response_from_dict = SasPortalListDevicesResponse.from_dict(sas_portal_list_devices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


