# VlanAttachment

VLAN attachment details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Immutable. The identifier of the attachment within vrf. | [optional] 
**interconnect_attachment** | **str** | Optional. The name of the vlan attachment within vrf. This is of the form projects/{project_number}/regions/{region}/interconnectAttachments/{interconnect_attachment} | [optional] 
**pairing_key** | **str** | Input only. Pairing key. | [optional] 
**peer_ip** | **str** | The peer IP of the attachment. | [optional] 
**peer_vlan_id** | **str** | The peer vlan ID of the attachment. | [optional] 
**qos_policy** | [**QosPolicy**](QosPolicy.md) |  | [optional] 
**router_ip** | **str** | The router IP of the attachment. | [optional] 

## Example

```python
from openapi_client.models.vlan_attachment import VlanAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of VlanAttachment from a JSON string
vlan_attachment_instance = VlanAttachment.from_json(json)
# print the JSON string representation of the object
print(VlanAttachment.to_json())

# convert the object into a dict
vlan_attachment_dict = vlan_attachment_instance.to_dict()
# create an instance of VlanAttachment from a dict
vlan_attachment_from_dict = VlanAttachment.from_dict(vlan_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


