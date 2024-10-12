# ServiceEndpointPolicyDefinitionListResult

Response for ListServiceEndpointPolicyDefinition API service call. Retrieves all service endpoint policy definition that belongs to a service endpoint policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[ServiceEndpointPolicyDefinition]**](ServiceEndpointPolicyDefinition.md) | The service endpoint policy definition in a service endpoint policy. | [optional] 

## Example

```python
from openapi_client.models.service_endpoint_policy_definition_list_result import ServiceEndpointPolicyDefinitionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceEndpointPolicyDefinitionListResult from a JSON string
service_endpoint_policy_definition_list_result_instance = ServiceEndpointPolicyDefinitionListResult.from_json(json)
# print the JSON string representation of the object
print(ServiceEndpointPolicyDefinitionListResult.to_json())

# convert the object into a dict
service_endpoint_policy_definition_list_result_dict = service_endpoint_policy_definition_list_result_instance.to_dict()
# create an instance of ServiceEndpointPolicyDefinitionListResult from a dict
service_endpoint_policy_definition_list_result_from_dict = ServiceEndpointPolicyDefinitionListResult.from_dict(service_endpoint_policy_definition_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


