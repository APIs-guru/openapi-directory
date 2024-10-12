# PeerAsnProperties

The properties that define a peer's ASN.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**peer_asn** | **int** | The Autonomous System Number (ASN) of the peer. | [optional] 
**peer_contact_info** | [**ContactInfo**](ContactInfo.md) |  | [optional] 
**peer_name** | **str** | The name of the peer. | [optional] 
**validation_state** | **str** | The validation state of the ASN associated with the peer. | [optional] 

## Example

```python
from openapi_client.models.peer_asn_properties import PeerAsnProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PeerAsnProperties from a JSON string
peer_asn_properties_instance = PeerAsnProperties.from_json(json)
# print the JSON string representation of the object
print(PeerAsnProperties.to_json())

# convert the object into a dict
peer_asn_properties_dict = peer_asn_properties_instance.to_dict()
# create an instance of PeerAsnProperties from a dict
peer_asn_properties_from_dict = PeerAsnProperties.from_dict(peer_asn_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


