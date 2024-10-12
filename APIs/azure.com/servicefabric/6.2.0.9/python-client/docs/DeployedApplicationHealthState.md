# DeployedApplicationHealthState

Represents the health state of a deployed application, which contains the entity identifier and the aggregated health state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**application_name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | [optional] 
**node_name** | **str** | The name of a Service Fabric node. | [optional] 

## Example

```python
from openapi_client.models.deployed_application_health_state import DeployedApplicationHealthState

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedApplicationHealthState from a JSON string
deployed_application_health_state_instance = DeployedApplicationHealthState.from_json(json)
# print the JSON string representation of the object
print(DeployedApplicationHealthState.to_json())

# convert the object into a dict
deployed_application_health_state_dict = deployed_application_health_state_instance.to_dict()
# create an instance of DeployedApplicationHealthState from a dict
deployed_application_health_state_from_dict = DeployedApplicationHealthState.from_dict(deployed_application_health_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


