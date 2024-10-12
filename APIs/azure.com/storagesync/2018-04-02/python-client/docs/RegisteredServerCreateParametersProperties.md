# RegisteredServerCreateParametersProperties

RegisteredServer Properties object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_version** | **str** | Registered Server Agent Version | [optional] 
**cluster_id** | **str** | Registered Server clusterId | [optional] 
**cluster_name** | **str** | Registered Server clusterName | [optional] 
**friendly_name** | **str** | Friendly Name | [optional] 
**last_heart_beat** | **str** | Registered Server last heart beat | [optional] 
**server_certificate** | **str** | Registered Server Certificate | [optional] 
**server_id** | **str** | Registered Server serverId | [optional] 
**server_os_version** | **str** | Registered Server OS Version | [optional] 
**server_role** | **str** | Registered Server serverRole | [optional] 

## Example

```python
from openapi_client.models.registered_server_create_parameters_properties import RegisteredServerCreateParametersProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RegisteredServerCreateParametersProperties from a JSON string
registered_server_create_parameters_properties_instance = RegisteredServerCreateParametersProperties.from_json(json)
# print the JSON string representation of the object
print(RegisteredServerCreateParametersProperties.to_json())

# convert the object into a dict
registered_server_create_parameters_properties_dict = registered_server_create_parameters_properties_instance.to_dict()
# create an instance of RegisteredServerCreateParametersProperties from a dict
registered_server_create_parameters_properties_from_dict = RegisteredServerCreateParametersProperties.from_dict(registered_server_create_parameters_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


