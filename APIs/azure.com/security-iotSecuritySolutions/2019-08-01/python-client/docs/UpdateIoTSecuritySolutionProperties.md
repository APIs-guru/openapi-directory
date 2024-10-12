# UpdateIoTSecuritySolutionProperties

Update Security Solution setting data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommendations_configuration** | [**List[RecommendationConfigurationProperties]**](RecommendationConfigurationProperties.md) | List of the configuration status for each recommendation type. | [optional] 
**user_defined_resources** | [**UserDefinedResourcesProperties**](UserDefinedResourcesProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_io_t_security_solution_properties import UpdateIoTSecuritySolutionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateIoTSecuritySolutionProperties from a JSON string
update_io_t_security_solution_properties_instance = UpdateIoTSecuritySolutionProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateIoTSecuritySolutionProperties.to_json())

# convert the object into a dict
update_io_t_security_solution_properties_dict = update_io_t_security_solution_properties_instance.to_dict()
# create an instance of UpdateIoTSecuritySolutionProperties from a dict
update_io_t_security_solution_properties_from_dict = UpdateIoTSecuritySolutionProperties.from_dict(update_io_t_security_solution_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


