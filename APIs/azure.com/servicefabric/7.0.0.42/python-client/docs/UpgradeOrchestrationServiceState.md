# UpgradeOrchestrationServiceState

Service state of Service Fabric Upgrade Orchestration Service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_state** | **str** | The state of Service Fabric Upgrade Orchestration Service. | [optional] 

## Example

```python
from openapi_client.models.upgrade_orchestration_service_state import UpgradeOrchestrationServiceState

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeOrchestrationServiceState from a JSON string
upgrade_orchestration_service_state_instance = UpgradeOrchestrationServiceState.from_json(json)
# print the JSON string representation of the object
print(UpgradeOrchestrationServiceState.to_json())

# convert the object into a dict
upgrade_orchestration_service_state_dict = upgrade_orchestration_service_state_instance.to_dict()
# create an instance of UpgradeOrchestrationServiceState from a dict
upgrade_orchestration_service_state_from_dict = UpgradeOrchestrationServiceState.from_dict(upgrade_orchestration_service_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


