# ServiceEndpointPolicyDefinitionPropertiesFormat

Service Endpoint policy definition resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description for this rule. Restricted to 140 chars. | [optional] 
**provisioning_state** | **str** | The provisioning state of the service end point policy definition. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**service** | **str** | service endpoint name. | [optional] 
**service_resources** | **List[str]** | A list of service resources. | [optional] 

## Example

```python
from openapi_client.models.service_endpoint_policy_definition_properties_format import ServiceEndpointPolicyDefinitionPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceEndpointPolicyDefinitionPropertiesFormat from a JSON string
service_endpoint_policy_definition_properties_format_instance = ServiceEndpointPolicyDefinitionPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ServiceEndpointPolicyDefinitionPropertiesFormat.to_json())

# convert the object into a dict
service_endpoint_policy_definition_properties_format_dict = service_endpoint_policy_definition_properties_format_instance.to_dict()
# create an instance of ServiceEndpointPolicyDefinitionPropertiesFormat from a dict
service_endpoint_policy_definition_properties_format_from_dict = ServiceEndpointPolicyDefinitionPropertiesFormat.from_dict(service_endpoint_policy_definition_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


