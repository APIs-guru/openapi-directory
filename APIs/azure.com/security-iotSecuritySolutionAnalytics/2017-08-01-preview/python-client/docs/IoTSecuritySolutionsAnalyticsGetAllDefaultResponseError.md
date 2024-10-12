# IoTSecuritySolutionsAnalyticsGetAllDefaultResponseError

Error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | An identifier for the error. Codes are invariant and are intended to be consumed programmatically. | [optional] [readonly] 
**message** | **str** | A message describing the error, intended to be suitable for display in a user interface. | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_security_solutions_analytics_get_all_default_response_error import IoTSecuritySolutionsAnalyticsGetAllDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecuritySolutionsAnalyticsGetAllDefaultResponseError from a JSON string
io_t_security_solutions_analytics_get_all_default_response_error_instance = IoTSecuritySolutionsAnalyticsGetAllDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(IoTSecuritySolutionsAnalyticsGetAllDefaultResponseError.to_json())

# convert the object into a dict
io_t_security_solutions_analytics_get_all_default_response_error_dict = io_t_security_solutions_analytics_get_all_default_response_error_instance.to_dict()
# create an instance of IoTSecuritySolutionsAnalyticsGetAllDefaultResponseError from a dict
io_t_security_solutions_analytics_get_all_default_response_error_from_dict = IoTSecuritySolutionsAnalyticsGetAllDefaultResponseError.from_dict(io_t_security_solutions_analytics_get_all_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


