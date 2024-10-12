# IoTSecuritySolutionProperties

Security Solution setting data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_discovered_resources** | **List[str]** | List of resources that were automatically discovered as relevant to the security solution. | [optional] [readonly] 
**disabled_data_sources** | **List[str]** | Disabled data sources. Disabling these data sources compromises the system. | [optional] 
**display_name** | **str** | Resource display name. | 
**export** | **List[str]** | List of additional export to workspace data options | [optional] 
**iot_hubs** | **List[str]** | IoT Hub resource IDs | 
**recommendations_configuration** | [**List[RecommendationConfigurationProperties]**](RecommendationConfigurationProperties.md) | List of recommendation configuration | [optional] 
**status** | **str** | Security solution status | [optional] [default to 'Enabled']
**user_defined_resources** | [**UserDefinedResourcesProperties**](UserDefinedResourcesProperties.md) |  | [optional] 
**workspace** | **str** | Workspace resource ID | 

## Example

```python
from openapi_client.models.io_t_security_solution_properties import IoTSecuritySolutionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecuritySolutionProperties from a JSON string
io_t_security_solution_properties_instance = IoTSecuritySolutionProperties.from_json(json)
# print the JSON string representation of the object
print(IoTSecuritySolutionProperties.to_json())

# convert the object into a dict
io_t_security_solution_properties_dict = io_t_security_solution_properties_instance.to_dict()
# create an instance of IoTSecuritySolutionProperties from a dict
io_t_security_solution_properties_from_dict = IoTSecuritySolutionProperties.from_dict(io_t_security_solution_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


