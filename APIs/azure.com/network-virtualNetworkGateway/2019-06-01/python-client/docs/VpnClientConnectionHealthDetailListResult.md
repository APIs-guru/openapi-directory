# VpnClientConnectionHealthDetailListResult

List of virtual network gateway vpn client connection health.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[VpnClientConnectionHealthDetail]**](VpnClientConnectionHealthDetail.md) | List of vpn client connection health. | [optional] 

## Example

```python
from openapi_client.models.vpn_client_connection_health_detail_list_result import VpnClientConnectionHealthDetailListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VpnClientConnectionHealthDetailListResult from a JSON string
vpn_client_connection_health_detail_list_result_instance = VpnClientConnectionHealthDetailListResult.from_json(json)
# print the JSON string representation of the object
print(VpnClientConnectionHealthDetailListResult.to_json())

# convert the object into a dict
vpn_client_connection_health_detail_list_result_dict = vpn_client_connection_health_detail_list_result_instance.to_dict()
# create an instance of VpnClientConnectionHealthDetailListResult from a dict
vpn_client_connection_health_detail_list_result_from_dict = VpnClientConnectionHealthDetailListResult.from_dict(vpn_client_connection_health_detail_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


