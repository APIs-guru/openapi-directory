# BgpPeerStatusListResult

Response for list BGP peer status API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[BgpPeerStatus]**](BgpPeerStatus.md) | List of BGP peers. | [optional] 

## Example

```python
from openapi_client.models.bgp_peer_status_list_result import BgpPeerStatusListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BgpPeerStatusListResult from a JSON string
bgp_peer_status_list_result_instance = BgpPeerStatusListResult.from_json(json)
# print the JSON string representation of the object
print(BgpPeerStatusListResult.to_json())

# convert the object into a dict
bgp_peer_status_list_result_dict = bgp_peer_status_list_result_instance.to_dict()
# create an instance of BgpPeerStatusListResult from a dict
bgp_peer_status_list_result_from_dict = BgpPeerStatusListResult.from_dict(bgp_peer_status_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


