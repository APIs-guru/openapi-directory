# ApplicationUpgradeDeployedApplicationHealthStates

The states of the deployed application health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** |  | [optional] 
**node_upgrade_progress_list** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.application_upgrade_deployed_application_health_states import ApplicationUpgradeDeployedApplicationHealthStates

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationUpgradeDeployedApplicationHealthStates from a JSON string
application_upgrade_deployed_application_health_states_instance = ApplicationUpgradeDeployedApplicationHealthStates.from_json(json)
# print the JSON string representation of the object
print(ApplicationUpgradeDeployedApplicationHealthStates.to_json())

# convert the object into a dict
application_upgrade_deployed_application_health_states_dict = application_upgrade_deployed_application_health_states_instance.to_dict()
# create an instance of ApplicationUpgradeDeployedApplicationHealthStates from a dict
application_upgrade_deployed_application_health_states_from_dict = ApplicationUpgradeDeployedApplicationHealthStates.from_dict(application_upgrade_deployed_application_health_states_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


