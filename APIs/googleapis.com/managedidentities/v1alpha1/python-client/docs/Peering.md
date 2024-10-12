# Peering

Represents a Managed Microsoft Identities Peering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_network** | **str** | Required. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Caller needs to make sure that CIDR subnets do not overlap between networks, else peering creation will fail. | [optional] 
**create_time** | **str** | Output only. The time the instance was created. | [optional] [readonly] 
**domain_resource** | **str** | Required. Full domain resource path for the Managed AD Domain involved in peering. The resource path should be in the form: &#x60;projects/{project_id}/locations/global/domains/{domain_name}&#x60; | [optional] 
**labels** | **Dict[str, str]** | Optional. Resource labels to represent user provided metadata. | [optional] 
**name** | **str** | Output only. Unique name of the peering in this scope including projects and location using the form: &#x60;projects/{project_id}/locations/global/peerings/{peering_id}&#x60;. | [optional] [readonly] 
**state** | **str** | Output only. The current state of this Peering. | [optional] [readonly] 
**status_message** | **str** | Output only. Additional information about the current status of this peering, if available. | [optional] [readonly] 
**update_time** | **str** | Output only. Last update time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering import Peering

# TODO update the JSON string below
json = "{}"
# create an instance of Peering from a JSON string
peering_instance = Peering.from_json(json)
# print the JSON string representation of the object
print(Peering.to_json())

# convert the object into a dict
peering_dict = peering_instance.to_dict()
# create an instance of Peering from a dict
peering_from_dict = Peering.from_dict(peering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


