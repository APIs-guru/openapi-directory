# PartnerUnclaim

Identifies one unclaim request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | Required. Device ID of the device. | [optional] 
**device_identifier** | [**DeviceIdentifier**](DeviceIdentifier.md) |  | [optional] 
**section_type** | **str** | Required. The section type of the device&#39;s provisioning record. | [optional] 
**vacation_mode_days** | **int** | Optional. The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours) | [optional] 
**vacation_mode_expire_time** | **str** | Optional. The expiration time of the vacation unlock. | [optional] 

## Example

```python
from openapi_client.models.partner_unclaim import PartnerUnclaim

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerUnclaim from a JSON string
partner_unclaim_instance = PartnerUnclaim.from_json(json)
# print the JSON string representation of the object
print(PartnerUnclaim.to_json())

# convert the object into a dict
partner_unclaim_dict = partner_unclaim_instance.to_dict()
# create an instance of PartnerUnclaim from a dict
partner_unclaim_from_dict = PartnerUnclaim.from_dict(partner_unclaim_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


