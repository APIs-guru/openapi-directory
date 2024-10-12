# StartApplicationUpgrade

The description of the start application upgrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_health_policy** | [**ApplicationHealthPolicy**](ApplicationHealthPolicy.md) |  | [optional] 
**force_restart** | **bool** |  | [optional] 
**monitoring_policy** | [**MonitoringPolicy**](MonitoringPolicy.md) |  | [optional] 
**name** | **str** |  | [optional] 
**parameters** | [**List[ApplicationParametersInner]**](ApplicationParametersInner.md) |  | [optional] 
**rolling_upgrade_mode** | [**RollingUpgradeMode**](RollingUpgradeMode.md) |  | [optional] 
**target_application_type_version** | **str** |  | [optional] 
**upgrade_kind** | **str** |  | [optional] 
**upgrade_replica_set_check_timeout_in_seconds** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.start_application_upgrade import StartApplicationUpgrade

# TODO update the JSON string below
json = "{}"
# create an instance of StartApplicationUpgrade from a JSON string
start_application_upgrade_instance = StartApplicationUpgrade.from_json(json)
# print the JSON string representation of the object
print(StartApplicationUpgrade.to_json())

# convert the object into a dict
start_application_upgrade_dict = start_application_upgrade_instance.to_dict()
# create an instance of StartApplicationUpgrade from a dict
start_application_upgrade_from_dict = StartApplicationUpgrade.from_dict(start_application_upgrade_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


