# IoTSecuritySolutionAnalyticsModel

Security Analytics of a security solution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IoTSecuritySolutionAnalyticsModelProperties**](IoTSecuritySolutionAnalyticsModelProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_security_solution_analytics_model import IoTSecuritySolutionAnalyticsModel

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecuritySolutionAnalyticsModel from a JSON string
io_t_security_solution_analytics_model_instance = IoTSecuritySolutionAnalyticsModel.from_json(json)
# print the JSON string representation of the object
print(IoTSecuritySolutionAnalyticsModel.to_json())

# convert the object into a dict
io_t_security_solution_analytics_model_dict = io_t_security_solution_analytics_model_instance.to_dict()
# create an instance of IoTSecuritySolutionAnalyticsModel from a dict
io_t_security_solution_analytics_model_from_dict = IoTSecuritySolutionAnalyticsModel.from_dict(io_t_security_solution_analytics_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


