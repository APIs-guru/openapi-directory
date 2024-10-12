# IoTSecuritySolutionModel

IoT Security solution configuration and resource information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The resource location. | [optional] 
**properties** | [**IoTSecuritySolutionProperties**](IoTSecuritySolutionProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_security_solution_model import IoTSecuritySolutionModel

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecuritySolutionModel from a JSON string
io_t_security_solution_model_instance = IoTSecuritySolutionModel.from_json(json)
# print the JSON string representation of the object
print(IoTSecuritySolutionModel.to_json())

# convert the object into a dict
io_t_security_solution_model_dict = io_t_security_solution_model_instance.to_dict()
# create an instance of IoTSecuritySolutionModel from a dict
io_t_security_solution_model_from_dict = IoTSecuritySolutionModel.from_dict(io_t_security_solution_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


