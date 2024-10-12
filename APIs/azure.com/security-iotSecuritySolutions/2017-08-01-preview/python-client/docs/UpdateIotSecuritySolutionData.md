# UpdateIotSecuritySolutionData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommendations_configuration** | [**List[RecommendationConfigurationProperties]**](RecommendationConfigurationProperties.md) | List of recommendation configuration | [optional] 
**user_defined_resources** | [**UserDefinedResourcesProperties**](UserDefinedResourcesProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.update_iot_security_solution_data import UpdateIotSecuritySolutionData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateIotSecuritySolutionData from a JSON string
update_iot_security_solution_data_instance = UpdateIotSecuritySolutionData.from_json(json)
# print the JSON string representation of the object
print(UpdateIotSecuritySolutionData.to_json())

# convert the object into a dict
update_iot_security_solution_data_dict = update_iot_security_solution_data_instance.to_dict()
# create an instance of UpdateIotSecuritySolutionData from a dict
update_iot_security_solution_data_from_dict = UpdateIotSecuritySolutionData.from_dict(update_iot_security_solution_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


