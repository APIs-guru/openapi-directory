# IoTSecuritySolutionAnalyticsModelList

List of Security Analytics of a security solution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[IoTSecuritySolutionAnalyticsModel]**](IoTSecuritySolutionAnalyticsModel.md) | List of Security Analytics of a security solution | 

## Example

```python
from openapi_client.models.io_t_security_solution_analytics_model_list import IoTSecuritySolutionAnalyticsModelList

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecuritySolutionAnalyticsModelList from a JSON string
io_t_security_solution_analytics_model_list_instance = IoTSecuritySolutionAnalyticsModelList.from_json(json)
# print the JSON string representation of the object
print(IoTSecuritySolutionAnalyticsModelList.to_json())

# convert the object into a dict
io_t_security_solution_analytics_model_list_dict = io_t_security_solution_analytics_model_list_instance.to_dict()
# create an instance of IoTSecuritySolutionAnalyticsModelList from a dict
io_t_security_solution_analytics_model_list_from_dict = IoTSecuritySolutionAnalyticsModelList.from_dict(io_t_security_solution_analytics_model_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


