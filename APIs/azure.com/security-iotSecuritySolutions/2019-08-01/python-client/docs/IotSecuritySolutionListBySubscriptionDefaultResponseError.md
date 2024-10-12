# IotSecuritySolutionListBySubscriptionDefaultResponseError

Error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | An identifier for the error. Codes are invariant and are intended to be consumed programmatically. | [optional] [readonly] 
**message** | **str** | A message describing the error, intended to be suitable for display in a user interface. | [optional] [readonly] 

## Example

```python
from openapi_client.models.iot_security_solution_list_by_subscription_default_response_error import IotSecuritySolutionListBySubscriptionDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of IotSecuritySolutionListBySubscriptionDefaultResponseError from a JSON string
iot_security_solution_list_by_subscription_default_response_error_instance = IotSecuritySolutionListBySubscriptionDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(IotSecuritySolutionListBySubscriptionDefaultResponseError.to_json())

# convert the object into a dict
iot_security_solution_list_by_subscription_default_response_error_dict = iot_security_solution_list_by_subscription_default_response_error_instance.to_dict()
# create an instance of IotSecuritySolutionListBySubscriptionDefaultResponseError from a dict
iot_security_solution_list_by_subscription_default_response_error_from_dict = IotSecuritySolutionListBySubscriptionDefaultResponseError.from_dict(iot_security_solution_list_by_subscription_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


