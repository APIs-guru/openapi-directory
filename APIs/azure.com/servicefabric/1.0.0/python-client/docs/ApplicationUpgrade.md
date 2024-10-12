# ApplicationUpgrade

The upgrade of the application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_upgrade_domain_progress** | [**ApplicationUpgradeCurrentUpgradeDomainProgress**](ApplicationUpgradeCurrentUpgradeDomainProgress.md) |  | [optional] 
**deployed_application_health_states** | [**ApplicationUpgradeDeployedApplicationHealthStates**](ApplicationUpgradeDeployedApplicationHealthStates.md) |  | [optional] 
**failure_reason** | [**FailureReason**](FailureReason.md) |  | [optional] 
**failure_timestamp_utc** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**next_upgrade_domain** | **str** |  | [optional] 
**rolling_upgrade_mode** | [**RollingUpgradeMode**](RollingUpgradeMode.md) |  | [optional] 
**start_timestamp_utc** | **str** |  | [optional] 
**target_application_type_version** | **str** |  | [optional] 
**type_name** | **str** |  | [optional] 
**unhealthy_evaluations** | **str** |  | [optional] 
**upgrade_domain_duration_in_milliseconds** | **str** |  | [optional] 
**upgrade_domains** | **str** |  | [optional] 
**upgrade_duration_in_milliseconds** | **str** |  | [optional] 
**upgrade_state** | [**UpgradeState**](UpgradeState.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_upgrade import ApplicationUpgrade

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationUpgrade from a JSON string
application_upgrade_instance = ApplicationUpgrade.from_json(json)
# print the JSON string representation of the object
print(ApplicationUpgrade.to_json())

# convert the object into a dict
application_upgrade_dict = application_upgrade_instance.to_dict()
# create an instance of ApplicationUpgrade from a dict
application_upgrade_from_dict = ApplicationUpgrade.from_dict(application_upgrade_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


