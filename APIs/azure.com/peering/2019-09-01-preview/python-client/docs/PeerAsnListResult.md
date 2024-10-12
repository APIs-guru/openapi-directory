# PeerAsnListResult

The paginated list of peer ASNs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to fetch the next page of peer ASNs. | [optional] 
**value** | [**List[PeerAsn]**](PeerAsn.md) | The list of peer ASNs. | [optional] 

## Example

```python
from openapi_client.models.peer_asn_list_result import PeerAsnListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PeerAsnListResult from a JSON string
peer_asn_list_result_instance = PeerAsnListResult.from_json(json)
# print the JSON string representation of the object
print(PeerAsnListResult.to_json())

# convert the object into a dict
peer_asn_list_result_dict = peer_asn_list_result_instance.to_dict()
# create an instance of PeerAsnListResult from a dict
peer_asn_list_result_from_dict = PeerAsnListResult.from_dict(peer_asn_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


