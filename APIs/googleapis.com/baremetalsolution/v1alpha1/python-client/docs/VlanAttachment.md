# VlanAttachment

A GCP vlan attachment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of the VLAN attachment. | [optional] 
**pairing_key** | **str** | Attachment pairing key. | [optional] 

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


