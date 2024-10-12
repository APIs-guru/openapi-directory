# IotSecuritySolutionAnalyticsListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**IotSecuritySolutionAnalyticsListDefaultResponseError**](IotSecuritySolutionAnalyticsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.iot_security_solution_analytics_list_default_response import IotSecuritySolutionAnalyticsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IotSecuritySolutionAnalyticsListDefaultResponse from a JSON string
iot_security_solution_analytics_list_default_response_instance = IotSecuritySolutionAnalyticsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(IotSecuritySolutionAnalyticsListDefaultResponse.to_json())

# convert the object into a dict
iot_security_solution_analytics_list_default_response_dict = iot_security_solution_analytics_list_default_response_instance.to_dict()
# create an instance of IotSecuritySolutionAnalyticsListDefaultResponse from a dict
iot_security_solution_analytics_list_default_response_from_dict = IotSecuritySolutionAnalyticsListDefaultResponse.from_dict(iot_security_solution_analytics_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


