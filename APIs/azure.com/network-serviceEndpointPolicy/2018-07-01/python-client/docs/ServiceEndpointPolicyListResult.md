# ServiceEndpointPolicyListResult

Response for ListServiceEndpointPolicies API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[ServiceEndpointPolicy]**](ServiceEndpointPolicy.md) | A list of ServiceEndpointPolicy resources. | [optional] 

## Example

```python
from openapi_client.models.service_endpoint_policy_list_result import ServiceEndpointPolicyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceEndpointPolicyListResult from a JSON string
service_endpoint_policy_list_result_instance = ServiceEndpointPolicyListResult.from_json(json)
# print the JSON string representation of the object
print(ServiceEndpointPolicyListResult.to_json())

# convert the object into a dict
service_endpoint_policy_list_result_dict = service_endpoint_policy_list_result_instance.to_dict()
# create an instance of ServiceEndpointPolicyListResult from a dict
service_endpoint_policy_list_result_from_dict = ServiceEndpointPolicyListResult.from_dict(service_endpoint_policy_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


