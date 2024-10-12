# PartnerClaim

Identifies one claim request.

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
from openapi_client.models.partner_claim import PartnerClaim

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerClaim from a JSON string
partner_claim_instance = PartnerClaim.from_json(json)
# print the JSON string representation of the object
print(PartnerClaim.to_json())

# convert the object into a dict
partner_claim_dict = partner_claim_instance.to_dict()
# create an instance of PartnerClaim from a dict
partner_claim_from_dict = PartnerClaim.from_dict(partner_claim_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


