# IoTSecuritySolutionsListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**IoTSecuritySolutionsListDefaultResponseError**](IoTSecuritySolutionsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.io_t_security_solutions_list_default_response import IoTSecuritySolutionsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecuritySolutionsListDefaultResponse from a JSON string
io_t_security_solutions_list_default_response_instance = IoTSecuritySolutionsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(IoTSecuritySolutionsListDefaultResponse.to_json())

# convert the object into a dict
io_t_security_solutions_list_default_response_dict = io_t_security_solutions_list_default_response_instance.to_dict()
# create an instance of IoTSecuritySolutionsListDefaultResponse from a dict
io_t_security_solutions_list_default_response_from_dict = IoTSecuritySolutionsListDefaultResponse.from_dict(io_t_security_solutions_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


