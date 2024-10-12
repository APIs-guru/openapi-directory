# EnvironmentDetails

This represents the details about a User's environment and its state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the Environment | [optional] [readonly] 
**environment_state** | **str** | Publishing state of the environment setting Possible values are Creating, Created, Failed | [optional] [readonly] 
**id** | **str** | Resource Id of the environment | [optional] [readonly] 
**latest_operation_result** | [**LatestOperationResult**](LatestOperationResult.md) |  | [optional] 
**name** | **str** | Name of the Environment | [optional] [readonly] 
**password_last_reset** | **datetime** | When the password was last reset on the environment. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state of the environment. This also includes LabIsFull and NotYetProvisioned status. | [optional] [readonly] 
**total_usage** | **str** | How long the environment has been used by a lab user | [optional] [readonly] 
**virtual_machine_details** | [**VirtualMachineDetails**](VirtualMachineDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.environment_details import EnvironmentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentDetails from a JSON string
environment_details_instance = EnvironmentDetails.from_json(json)
# print the JSON string representation of the object
print(EnvironmentDetails.to_json())

# convert the object into a dict
environment_details_dict = environment_details_instance.to_dict()
# create an instance of EnvironmentDetails from a dict
environment_details_from_dict = EnvironmentDetails.from_dict(environment_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


