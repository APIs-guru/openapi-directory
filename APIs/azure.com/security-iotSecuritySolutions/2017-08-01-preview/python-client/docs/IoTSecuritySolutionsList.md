# IoTSecuritySolutionsList

List of iot solutions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[IoTSecuritySolutionModel]**](IoTSecuritySolutionModel.md) | List of security solutions | 

## Example

```python
from openapi_client.models.io_t_security_solutions_list import IoTSecuritySolutionsList

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecuritySolutionsList from a JSON string
io_t_security_solutions_list_instance = IoTSecuritySolutionsList.from_json(json)
# print the JSON string representation of the object
print(IoTSecuritySolutionsList.to_json())

# convert the object into a dict
io_t_security_solutions_list_dict = io_t_security_solutions_list_instance.to_dict()
# create an instance of IoTSecuritySolutionsList from a dict
io_t_security_solutions_list_from_dict = IoTSecuritySolutionsList.from_dict(io_t_security_solutions_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


