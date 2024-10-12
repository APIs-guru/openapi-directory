# IntakeVlanAttachment

A GCP vlan attachment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of the VLAN attachment. | [optional] 
**pairing_key** | **str** | Attachment pairing key. | [optional] 

## Example

```python
from openapi_client.models.intake_vlan_attachment import IntakeVlanAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of IntakeVlanAttachment from a JSON string
intake_vlan_attachment_instance = IntakeVlanAttachment.from_json(json)
# print the JSON string representation of the object
print(IntakeVlanAttachment.to_json())

# convert the object into a dict
intake_vlan_attachment_dict = intake_vlan_attachment_instance.to_dict()
# create an instance of IntakeVlanAttachment from a dict
intake_vlan_attachment_from_dict = IntakeVlanAttachment.from_dict(intake_vlan_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


