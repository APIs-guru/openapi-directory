# DeviceClaim

A record of a device claimed by a reseller for a customer. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. To learn more, read [Claim devices for customers](/zero-touch/guides/how-it-works#claim).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_service** | **str** | The Additional service registered for the device. | [optional] 
**google_workspace_customer_id** | **str** | The ID of the Google Workspace account that owns the Chrome OS device. | [optional] 
**owner_company_id** | **str** | The ID of the Customer that purchased the device. | [optional] 
**reseller_id** | **str** | The ID of the reseller that claimed the device. | [optional] 
**section_type** | **str** | Output only. The type of claim made on the device. | [optional] [readonly] 
**vacation_mode_expire_time** | **str** | The timestamp when the device will exit ‘vacation mode’. This value is present iff the device is in &#39;vacation mode&#39;. | [optional] 
**vacation_mode_start_time** | **str** | The timestamp when the device was put into ‘vacation mode’. This value is present iff the device is in &#39;vacation mode&#39;. | [optional] 

## Example

```python
from openapi_client.models.device_claim import DeviceClaim

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceClaim from a JSON string
device_claim_instance = DeviceClaim.from_json(json)
# print the JSON string representation of the object
print(DeviceClaim.to_json())

# convert the object into a dict
device_claim_dict = device_claim_instance.to_dict()
# create an instance of DeviceClaim from a dict
device_claim_from_dict = DeviceClaim.from_dict(device_claim_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


