# SasPortalMoveDeviceRequest

Request for MoveDevice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | **str** | Required. The name of the new parent resource node or customer to reparent the device under. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_move_device_request import SasPortalMoveDeviceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalMoveDeviceRequest from a JSON string
sas_portal_move_device_request_instance = SasPortalMoveDeviceRequest.from_json(json)
# print the JSON string representation of the object
print(SasPortalMoveDeviceRequest.to_json())

# convert the object into a dict
sas_portal_move_device_request_dict = sas_portal_move_device_request_instance.to_dict()
# create an instance of SasPortalMoveDeviceRequest from a dict
sas_portal_move_device_request_from_dict = SasPortalMoveDeviceRequest.from_dict(sas_portal_move_device_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


