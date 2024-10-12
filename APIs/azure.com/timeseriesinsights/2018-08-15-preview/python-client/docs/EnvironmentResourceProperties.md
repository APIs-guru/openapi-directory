# EnvironmentResourceProperties

Properties of the environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_access_fqdn** | **str** | The fully qualified domain name used to access the environment data, e.g. to query the environment&#39;s events or upload reference data for the environment. | [optional] [readonly] 
**data_access_id** | **str** | An id used to access the environment data, e.g. to query the environment&#39;s events or upload reference data for the environment. | [optional] [readonly] 
**status** | [**EnvironmentStatus**](EnvironmentStatus.md) |  | [optional] 
**creation_time** | **datetime** | The time the resource was created. | [optional] [readonly] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 

## Example

```python
from openapi_client.models.environment_resource_properties import EnvironmentResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentResourceProperties from a JSON string
environment_resource_properties_instance = EnvironmentResourceProperties.from_json(json)
# print the JSON string representation of the object
print(EnvironmentResourceProperties.to_json())

# convert the object into a dict
environment_resource_properties_dict = environment_resource_properties_instance.to_dict()
# create an instance of EnvironmentResourceProperties from a dict
environment_resource_properties_from_dict = EnvironmentResourceProperties.from_dict(environment_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


