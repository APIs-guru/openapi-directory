# UpdateNetworkFirmwareUpgradesStagedStagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_json** | [**List[UpdateNetworkFirmwareUpgradesStagedStagesRequestJsonInner]**](UpdateNetworkFirmwareUpgradesStagedStagesRequestJsonInner.md) | Array of Staged Upgrade Groups | [optional] 

## Example

```python
from openapi_client.models.update_network_firmware_upgrades_staged_stages_request import UpdateNetworkFirmwareUpgradesStagedStagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkFirmwareUpgradesStagedStagesRequest from a JSON string
update_network_firmware_upgrades_staged_stages_request_instance = UpdateNetworkFirmwareUpgradesStagedStagesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkFirmwareUpgradesStagedStagesRequest.to_json())

# convert the object into a dict
update_network_firmware_upgrades_staged_stages_request_dict = update_network_firmware_upgrades_staged_stages_request_instance.to_dict()
# create an instance of UpdateNetworkFirmwareUpgradesStagedStagesRequest from a dict
update_network_firmware_upgrades_staged_stages_request_from_dict = UpdateNetworkFirmwareUpgradesStagedStagesRequest.from_dict(update_network_firmware_upgrades_staged_stages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


