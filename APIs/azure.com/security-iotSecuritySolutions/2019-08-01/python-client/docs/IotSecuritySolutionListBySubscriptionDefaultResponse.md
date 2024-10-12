# IotSecuritySolutionListBySubscriptionDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**IotSecuritySolutionListBySubscriptionDefaultResponseError**](IotSecuritySolutionListBySubscriptionDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.iot_security_solution_list_by_subscription_default_response import IotSecuritySolutionListBySubscriptionDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IotSecuritySolutionListBySubscriptionDefaultResponse from a JSON string
iot_security_solution_list_by_subscription_default_response_instance = IotSecuritySolutionListBySubscriptionDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(IotSecuritySolutionListBySubscriptionDefaultResponse.to_json())

# convert the object into a dict
iot_security_solution_list_by_subscription_default_response_dict = iot_security_solution_list_by_subscription_default_response_instance.to_dict()
# create an instance of IotSecuritySolutionListBySubscriptionDefaultResponse from a dict
iot_security_solution_list_by_subscription_default_response_from_dict = IotSecuritySolutionListBySubscriptionDefaultResponse.from_dict(iot_security_solution_list_by_subscription_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


