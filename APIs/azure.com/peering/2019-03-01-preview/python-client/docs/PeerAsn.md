# PeerAsn

The essential information related to the peer's ASN.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PeerAsnProperties**](PeerAsnProperties.md) |  | [optional] 
**id** | **str** | The ID of the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peer_asn import PeerAsn

# TODO update the JSON string below
json = "{}"
# create an instance of PeerAsn from a JSON string
peer_asn_instance = PeerAsn.from_json(json)
# print the JSON string representation of the object
print(PeerAsn.to_json())

# convert the object into a dict
peer_asn_dict = peer_asn_instance.to_dict()
# create an instance of PeerAsn from a dict
peer_asn_from_dict = PeerAsn.from_dict(peer_asn_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


