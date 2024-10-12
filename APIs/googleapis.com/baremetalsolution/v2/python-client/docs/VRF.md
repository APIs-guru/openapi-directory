# VRF

A network VRF.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the VRF. | [optional] 
**qos_policy** | [**QosPolicy**](QosPolicy.md) |  | [optional] 
**state** | **str** | The possible state of VRF. | [optional] 
**vlan_attachments** | [**List[VlanAttachment]**](VlanAttachment.md) | The list of VLAN attachments for the VRF. | [optional] 

## Example

```python
from openapi_client.models.vrf import VRF

# TODO update the JSON string below
json = "{}"
# create an instance of VRF from a JSON string
vrf_instance = VRF.from_json(json)
# print the JSON string representation of the object
print(VRF.to_json())

# convert the object into a dict
vrf_dict = vrf_instance.to_dict()
# create an instance of VRF from a dict
vrf_from_dict = VRF.from_dict(vrf_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


