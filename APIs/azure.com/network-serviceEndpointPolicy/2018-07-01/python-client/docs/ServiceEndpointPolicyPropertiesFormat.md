# ServiceEndpointPolicyPropertiesFormat

Service Endpoint Policy resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state of the service endpoint policy. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**resource_guid** | **str** | The resource GUID property of the service endpoint policy resource. | [optional] 
**service_endpoint_policy_definitions** | [**List[ServiceEndpointPolicyDefinition]**](ServiceEndpointPolicyDefinition.md) | A collection of service endpoint policy definitions of the service endpoint policy. | [optional] 

## Example

```python
from openapi_client.models.service_endpoint_policy_properties_format import ServiceEndpointPolicyPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceEndpointPolicyPropertiesFormat from a JSON string
service_endpoint_policy_properties_format_instance = ServiceEndpointPolicyPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ServiceEndpointPolicyPropertiesFormat.to_json())

# convert the object into a dict
service_endpoint_policy_properties_format_dict = service_endpoint_policy_properties_format_instance.to_dict()
# create an instance of ServiceEndpointPolicyPropertiesFormat from a dict
service_endpoint_policy_properties_format_from_dict = ServiceEndpointPolicyPropertiesFormat.from_dict(service_endpoint_policy_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


