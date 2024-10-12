# GetOrganizationFirmwareUpgrades200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed_at** | **str** | Timestamp when upgrade completed. Null if status pending. | [optional] 
**from_version** | [**GetOrganizationFirmwareUpgrades200ResponseInnerFromVersion**](GetOrganizationFirmwareUpgrades200ResponseInnerFromVersion.md) |  | [optional] 
**network** | [**GetOrganizationFirmwareUpgrades200ResponseInnerNetwork**](GetOrganizationFirmwareUpgrades200ResponseInnerNetwork.md) |  | [optional] 
**product_type** | **str** | product upgraded [wireless, appliance, switch, systemsManager, camera, cellularGateway, sensor] | [optional] 
**status** | **str** | Status of upgrade event: [Cancelled, Completed] | [optional] 
**time** | **datetime** | Scheduled start time | [optional] 
**to_version** | [**GetOrganizationFirmwareUpgrades200ResponseInnerToVersion**](GetOrganizationFirmwareUpgrades200ResponseInnerToVersion.md) |  | [optional] 
**upgrade_batch_id** | **str** | The upgrade batch | [optional] 
**upgrade_id** | **str** | The upgrade | [optional] 

## Example

```python
from openapi_client.models.get_organization_firmware_upgrades200_response_inner import GetOrganizationFirmwareUpgrades200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationFirmwareUpgrades200ResponseInner from a JSON string
get_organization_firmware_upgrades200_response_inner_instance = GetOrganizationFirmwareUpgrades200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationFirmwareUpgrades200ResponseInner.to_json())

# convert the object into a dict
get_organization_firmware_upgrades200_response_inner_dict = get_organization_firmware_upgrades200_response_inner_instance.to_dict()
# create an instance of GetOrganizationFirmwareUpgrades200ResponseInner from a dict
get_organization_firmware_upgrades200_response_inner_from_dict = GetOrganizationFirmwareUpgrades200ResponseInner.from_dict(get_organization_firmware_upgrades200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


