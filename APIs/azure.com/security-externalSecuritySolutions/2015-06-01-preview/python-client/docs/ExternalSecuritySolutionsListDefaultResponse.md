# ExternalSecuritySolutionsListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ExternalSecuritySolutionsListDefaultResponseError**](ExternalSecuritySolutionsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.external_security_solutions_list_default_response import ExternalSecuritySolutionsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalSecuritySolutionsListDefaultResponse from a JSON string
external_security_solutions_list_default_response_instance = ExternalSecuritySolutionsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ExternalSecuritySolutionsListDefaultResponse.to_json())

# convert the object into a dict
external_security_solutions_list_default_response_dict = external_security_solutions_list_default_response_instance.to_dict()
# create an instance of ExternalSecuritySolutionsListDefaultResponse from a dict
external_security_solutions_list_default_response_from_dict = ExternalSecuritySolutionsListDefaultResponse.from_dict(external_security_solutions_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


