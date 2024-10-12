# UpgradeOrchestrationServiceStateSummary

Service state summary of Service Fabric Upgrade Orchestration Service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_code_version** | **str** | The current code version of the cluster. | [optional] 
**current_manifest_version** | **str** | The current manifest version of the cluster. | [optional] 
**pending_upgrade_type** | **str** | The type of the pending upgrade of the cluster. | [optional] 
**target_code_version** | **str** | The target code version of  the cluster. | [optional] 
**target_manifest_version** | **str** | The target manifest version of the cluster. | [optional] 

## Example

```python
from openapi_client.models.upgrade_orchestration_service_state_summary import UpgradeOrchestrationServiceStateSummary

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeOrchestrationServiceStateSummary from a JSON string
upgrade_orchestration_service_state_summary_instance = UpgradeOrchestrationServiceStateSummary.from_json(json)
# print the JSON string representation of the object
print(UpgradeOrchestrationServiceStateSummary.to_json())

# convert the object into a dict
upgrade_orchestration_service_state_summary_dict = upgrade_orchestration_service_state_summary_instance.to_dict()
# create an instance of UpgradeOrchestrationServiceStateSummary from a dict
upgrade_orchestration_service_state_summary_from_dict = UpgradeOrchestrationServiceStateSummary.from_dict(upgrade_orchestration_service_state_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


