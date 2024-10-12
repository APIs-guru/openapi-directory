# PscConnection

Details of consumer resources in a PSC connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Output only. The IP allocated on the consumer network for the PSC forwarding rule. | [optional] [readonly] 
**forwarding_rule** | **str** | Output only. The URI of the consumer side forwarding rule. Example: projects/{projectNumOrId}/regions/us-east1/forwardingRules/{resourceId}. | [optional] [readonly] 
**network** | **str** | The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. | [optional] 
**project_id** | **str** | Output only. The consumer project_id where the forwarding rule is created from. | [optional] [readonly] 
**psc_connection_id** | **str** | Output only. The PSC connection id of the forwarding rule connected to the service attachment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.psc_connection import PscConnection

# TODO update the JSON string below
json = "{}"
# create an instance of PscConnection from a JSON string
psc_connection_instance = PscConnection.from_json(json)
# print the JSON string representation of the object
print(PscConnection.to_json())

# convert the object into a dict
psc_connection_dict = psc_connection_instance.to_dict()
# create an instance of PscConnection from a dict
psc_connection_from_dict = PscConnection.from_dict(psc_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


