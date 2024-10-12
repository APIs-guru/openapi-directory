# ServiceEndpointPolicyDefinition

Service Endpoint policy definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**ServiceEndpointPolicyDefinitionPropertiesFormat**](ServiceEndpointPolicyDefinitionPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.service_endpoint_policy_definition import ServiceEndpointPolicyDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceEndpointPolicyDefinition from a JSON string
service_endpoint_policy_definition_instance = ServiceEndpointPolicyDefinition.from_json(json)
# print the JSON string representation of the object
print(ServiceEndpointPolicyDefinition.to_json())

# convert the object into a dict
service_endpoint_policy_definition_dict = service_endpoint_policy_definition_instance.to_dict()
# create an instance of ServiceEndpointPolicyDefinition from a dict
service_endpoint_policy_definition_from_dict = ServiceEndpointPolicyDefinition.from_dict(service_endpoint_policy_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


