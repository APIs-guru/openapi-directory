# HttpRouteFaultInjectionPolicyAbort

Specification of how client requests are aborted as part of fault injection before being sent to a destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_status** | **int** | The HTTP status code used to abort the request. The value must be between 200 and 599 inclusive. | [optional] 
**percentage** | **int** | The percentage of traffic which will be aborted. The value must be between [0, 100] | [optional] 

## Example

```python
from openapi_client.models.http_route_fault_injection_policy_abort import HttpRouteFaultInjectionPolicyAbort

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteFaultInjectionPolicyAbort from a JSON string
http_route_fault_injection_policy_abort_instance = HttpRouteFaultInjectionPolicyAbort.from_json(json)
# print the JSON string representation of the object
print(HttpRouteFaultInjectionPolicyAbort.to_json())

# convert the object into a dict
http_route_fault_injection_policy_abort_dict = http_route_fault_injection_policy_abort_instance.to_dict()
# create an instance of HttpRouteFaultInjectionPolicyAbort from a dict
http_route_fault_injection_policy_abort_from_dict = HttpRouteFaultInjectionPolicyAbort.from_dict(http_route_fault_injection_policy_abort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


