# CollectorBodyAgentSpnProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | [optional] 
**audience** | **str** | Intended audience for the service principal. | [optional] 
**authority** | **str** | AAD Authority URL which was used to request the token for the service principal. | [optional] 
**object_id** | **str** | Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | [optional] 
**tenant_id** | **str** | Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | [optional] 

## Example

```python
from openapi_client.models.collector_body_agent_spn_properties import CollectorBodyAgentSpnProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CollectorBodyAgentSpnProperties from a JSON string
collector_body_agent_spn_properties_instance = CollectorBodyAgentSpnProperties.from_json(json)
# print the JSON string representation of the object
print(CollectorBodyAgentSpnProperties.to_json())

# convert the object into a dict
collector_body_agent_spn_properties_dict = collector_body_agent_spn_properties_instance.to_dict()
# create an instance of CollectorBodyAgentSpnProperties from a dict
collector_body_agent_spn_properties_from_dict = CollectorBodyAgentSpnProperties.from_dict(collector_body_agent_spn_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


