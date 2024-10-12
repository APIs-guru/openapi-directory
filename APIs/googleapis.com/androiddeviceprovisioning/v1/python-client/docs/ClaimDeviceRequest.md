# ClaimDeviceRequest

Request message to claim a device on behalf of a customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_id** | **str** | Optional. The ID of the configuration applied to the device section. | [optional] 
**customer_id** | **str** | The ID of the customer for whom the device is being claimed. | [optional] 
**device_identifier** | [**DeviceIdentifier**](DeviceIdentifier.md) |  | [optional] 
**device_metadata** | [**DeviceMetadata**](DeviceMetadata.md) |  | [optional] 
**google_workspace_customer_id** | **str** | The Google Workspace customer ID. | [optional] 
**pre_provisioning_token** | **str** | Optional. Must and can only be set for Chrome OS devices. | [optional] 
**section_type** | **str** | Required. The section type of the device&#39;s provisioning record. | [optional] 
**simlock_profile_id** | **str** | Optional. Must and can only be set when DeviceProvisioningSectionType is SECTION_TYPE_SIM_LOCK. The unique identifier of the SimLock profile. | [optional] 

## Example

```python
from openapi_client.models.claim_device_request import ClaimDeviceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClaimDeviceRequest from a JSON string
claim_device_request_instance = ClaimDeviceRequest.from_json(json)
# print the JSON string representation of the object
print(ClaimDeviceRequest.to_json())

# convert the object into a dict
claim_device_request_dict = claim_device_request_instance.to_dict()
# create an instance of ClaimDeviceRequest from a dict
claim_device_request_from_dict = ClaimDeviceRequest.from_dict(claim_device_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


