# EnvironmentProperties

Properties of an environment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claimed_by_user_name** | **str** | The name or email address of the user who has claimed the environment | [optional] [readonly] 
**claimed_by_user_object_id** | **str** | The AAD object Id of the user who has claimed the environment | [optional] [readonly] 
**claimed_by_user_principal_id** | **str** | The user principal Id of the user who has claimed the environment | [optional] [readonly] 
**is_claimed** | **bool** | Is the environment claimed or not | [optional] [readonly] 
**last_known_power_state** | **str** | Last known power state of the environment | [optional] [readonly] 
**latest_operation_result** | [**LatestOperationResult**](LatestOperationResult.md) |  | [optional] 
**network_interface** | [**NetworkInterface**](NetworkInterface.md) |  | [optional] 
**password_last_reset** | **datetime** | When the password was last reset on the environment. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**resource_sets** | [**ResourceSet**](ResourceSet.md) |  | [optional] 
**total_usage** | **str** | How long the environment has been used by a lab user | [optional] [readonly] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 

## Example

```python
from openapi_client.models.environment_properties import EnvironmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentProperties from a JSON string
environment_properties_instance = EnvironmentProperties.from_json(json)
# print the JSON string representation of the object
print(EnvironmentProperties.to_json())

# convert the object into a dict
environment_properties_dict = environment_properties_instance.to_dict()
# create an instance of EnvironmentProperties from a dict
environment_properties_from_dict = EnvironmentProperties.from_dict(environment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


