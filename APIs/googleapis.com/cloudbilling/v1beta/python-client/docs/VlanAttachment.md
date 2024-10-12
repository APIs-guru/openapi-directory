# VlanAttachment

VLAN attachment for Cloud Interconnect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth** | **str** | Capacities in the [pricing table](https://cloud.google.com/vpc/network-pricing#interconnect-pricing) Examples of capacity are: 50/100/200/300/400/500-Mbps, 1/2/5/10/20/50-Gbps. | [optional] 
**vlan_count** | [**Usage**](Usage.md) |  | [optional] 

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


