# DiscoveredSecuritySolutionsListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**DiscoveredSecuritySolutionsListDefaultResponseError**](DiscoveredSecuritySolutionsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.discovered_security_solutions_list_default_response import DiscoveredSecuritySolutionsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveredSecuritySolutionsListDefaultResponse from a JSON string
discovered_security_solutions_list_default_response_instance = DiscoveredSecuritySolutionsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(DiscoveredSecuritySolutionsListDefaultResponse.to_json())

# convert the object into a dict
discovered_security_solutions_list_default_response_dict = discovered_security_solutions_list_default_response_instance.to_dict()
# create an instance of DiscoveredSecuritySolutionsListDefaultResponse from a dict
discovered_security_solutions_list_default_response_from_dict = DiscoveredSecuritySolutionsListDefaultResponse.from_dict(discovered_security_solutions_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


